package com.ssafy.pnut.controller;

import com.ssafy.pnut.common.response.BaseResponseBody;
import com.ssafy.pnut.dto.BoardDto;
import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.dto.SelectAllRecipeRes;
import com.ssafy.pnut.entity.board;
import com.ssafy.pnut.service.*;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Api(value = "게시판 API", tags = {"Board"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    private final BoardServiceImpl boardService;
    private final BoardStepsServiceImpl boardStepsService;
    private final AwsS3Service awsS3Service;


    @PostMapping("/create")
    @ApiOperation(value = "게시판 글 작성", notes = "<strong>게시판 글 작성</strong>")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends Object> createRecipe(@RequestPart @ApiParam(value="게시글 정보", required = true) RecipeCreateReq recipeCreateReq, @RequestPart @ApiParam(value="file", required = false) List<MultipartFile> file) {
        try {
            String thumbnailImg = awsS3Service.uploadImage(file.get(0));  // 썸네일 이미지 S3에 올림
            file.remove(0);  // 리스트에서 썸네일 삭제

            board Board = boardService.save(recipeCreateReq, thumbnailImg);  // 단계들 빼고 글, 사진 DB에 올리고 게시글 번호 반환
            List<String> ImgNameList = awsS3Service.uploadImages(file);  // 레시피 단계 사진들 S3에 게시

            boardStepsService.save(recipeCreateReq.getRecipe_steps(), Board, ImgNameList, recipeCreateReq.getStepNums());  // 레시피 단계 글이랑 사진 DB에 저장

            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "success"));
        } catch (Exception e) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(401, "Bad Request"));
        }
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "게시판 글 삭제", notes = "<strong>게시판 글 삭제</strong>")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends Object> deleteRecipe(@PathVariable("id") Long id) {
        try {
            Optional<board> Board = boardService.findById(id);
            if(Board.isPresent()) {
//                boardStepsService.deleteAllByBoardId(Board.get());
                boardService.deleteById(id);
            }
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "success"));
        } catch (Exception e) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(401, "Bad Request"));
        }
    }

//    @GetMapping("")
//    @ApiOperation(value = "게시판 글 전체 조회", notes = "<strong>게시판 글 전체 조회</strong>")
//    @ApiResponses({
//            @ApiResponse(code = 200, message = "성공"),
//            @ApiResponse(code = 204, message = "No Content"),
//            @ApiResponse(code = 401, message = "인증 실패"),
//            @ApiResponse(code = 404, message = "사용자 없음"),
//            @ApiResponse(code = 500, message = "서버 오류")
//    })
//    public ResponseEntity<? extends Object> selectAllRecipe() throws IOException {
//        try {
//            List<BoardDto> Boards = boardService.findAll();
//            List<SelectAllRecipeRes> Recipes = new ArrayList<>();
//            for(int i = 0; i < Boards.size(); i++) {
//
//                Object obj = awsS3Service.getObject(Boards.get(i).getThumbnail_image_url());
//                SelectAllRecipeRes selectAllRecipeRes = new SelectAllRecipeRes(Boards.get(i).);
//
//            }
//
//
//            return ResponseEntity.status(200).body(obj);
//        } catch (Exception e) {
//            return ResponseEntity.status(200).body(BaseResponseBody.of(401, "Bad Request"));
//        }
//    }
}
