package com.ssafy.pnut.controller;

import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.service.BoardServiceImpl;
import com.ssafy.pnut.service.Board_stepsService;
import com.ssafy.pnut.service.Board_stepsServiceImpl;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "게시판 API", tags = {"Board"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/boards")
public class BoardController {

    private final BoardServiceImpl boardService;
    private final Board_stepsServiceImpl board_stepsService;

    @PostMapping("/boards/create")
    @ApiOperation(value = "게시판 글 작성", notes = "<strong>게시판 글 작성</strong>")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends Object> createRecipe(@RequestBody @ApiParam(value="게시글 정보", required = true) RecipeCreateReq recipeCreateReq) {
        try {
            board_stepsService.save(recipeCreateReq.getRecipe_steps());
            boardService.save(recipeCreateReq);
        }
    }


}
