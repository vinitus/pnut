package com.ssafy.pnut.controller;

import com.ssafy.pnut.common.response.BaseResponseBody;
import com.ssafy.pnut.dto.BoardDto;
import com.ssafy.pnut.dto.SelectAllRecipeRes;
import com.ssafy.pnut.dto.UserDto;
import com.ssafy.pnut.entity.category;
import com.ssafy.pnut.entity.question;
import com.ssafy.pnut.service.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Api(value = "설문 API", tags = {"survey"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/survey")
public class QuestionController {

    private final CategoryServiceImpl categoryService;
    private final QuestionServiceImpl questionService;
    private final ResultServiceImpl resultService;
    private final NutrientQuestionServiceImpl nutrientQuestionService;

    private final UserServiceImpl userService;

    @GetMapping("")
    @ApiOperation(value = "설문에서 전체 증상 조회", notes = "<strong>설문에서 전체 증상 조회</strong>")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends Object> selectAllSymptoms(HttpServletRequest request) throws IOException {
        try {
            UserDto userDto = userService.getUserByToken(request.getHeader("Authorization").substring(7));
            List<String> symptoms = new ArrayList<>();
            List<category> categories = categoryService.findAll();
            symptoms.add(userDto.getNickname());  // 처음값은 닉네임..
            for(int i = 0; i < categories.size(); i++) {  // 증상 이름들만 리스트로 수집
                String symptom = categories.get(i).getName();
                symptoms.add(symptom);
            }

            return ResponseEntity.status(200).body(symptoms);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Bad Request"));
        }
    }

    @GetMapping("/{categoryId}")
    @ApiOperation(value = "선택 카테고리의 질문들 조회", notes = "<strong>선택 카테고리의 질문들 조회</strong>")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 204, message = "No Content"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends Object> selectSymptomsByCategory(@PathVariable("categoryId") Long id, HttpServletRequest request) throws IOException {
        try {
            UserDto userDto = userService.getUserByToken(request.getHeader("Authorization").substring(7));
            List<String> questionlist = new ArrayList<>();

            questionlist.add(userDto.getNickname());  // 인덱스 0값에는 유저 닉네임 넣어주기

            // id에 맞는 카테고리 엔티티 구하기 (question에 category외래키가 객체로 저장되어있어서)
            Optional<category> category = categoryService.findById(id);

            List<question> questions = questionService.findAllByCategoryIdOrderById(category.get());  // 카테고리에 맞는 질문들을 순서대로 가져오기
            for(int i = 0; i < questions.size(); i++) {  // 질문 내용들만 리스트로 수집
                String str = questions.get(i).getContent();
                questionlist.add(str);
            }

            return ResponseEntity.status(200).body(questionlist);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "Bad Request"));
        }
    }
}
