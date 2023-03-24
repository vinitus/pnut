package com.ssafy.pnut.controller;

import com.ssafy.pnut.dto.FoodDto;
import com.ssafy.pnut.dto.IngredientDto;
import com.ssafy.pnut.service.FoodService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/foods")
@Api(tags = {"요리 정보 관련 API"})
public class FoodController {
    @Autowired
    private FoodService foodService;

    public static final Logger logger = LoggerFactory.getLogger(FoodController.class);
    private static final String SUCCESS = "success in FoodController";
    private static final String FAIL = "fail in FoodController";
    private static final String ALEADY_EXIST = "already exists in FoodController";

    @ApiOperation(value = "요리 재료 리스트", notes = "자동완성용 요리 재료 리스트 전달 API", response = Map.class)
    @GetMapping("/ingredients")
    public ResponseEntity<?> getIngredients(){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try{
            List<IngredientDto> result = foodService.getIngredients();
            if(result==null){
                logger.debug("재료 조회 결과 : {}", "재료 없음");
                resultMap.put("result", null);
                resultMap.put("message", "재료가 존재하지 않음");
                status = HttpStatus.ACCEPTED;
                return new ResponseEntity<>(resultMap, status);
            }
            logger.debug("재료 조회 결과: {}", "성공");
            resultMap.put("list", result);
            resultMap.put("message", SUCCESS);
            status = HttpStatus.OK;
        }catch (Exception e){
            e.printStackTrace();
            logger.error("재료 조회 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "요리 음식 리스트", notes = "자동완성용 요리 음식 리스트 전달 API", response = Map.class)
    @GetMapping("/food")
    public ResponseEntity<?> getFoods(){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try{
            List<FoodDto> result = foodService.getFoods();
            if(result==null){
                logger.debug("음식 조회 결과 : {}", "음식 없음");
                resultMap.put("result", null);
                resultMap.put("message", "음식이 존재하지 않음");
                status = HttpStatus.ACCEPTED;
                return new ResponseEntity<>(resultMap, status);
            }
            logger.debug("음식 조회 결과 : {}", "성공");
            resultMap.put("list", result);
            resultMap.put("message", SUCCESS);
            status = HttpStatus.OK;
        }catch (Exception e){
            e.printStackTrace();
            logger.error("음식 조회 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "증상에 따른 전체요리 검색", notes = "해당 증상에 존재하는 모든 요리 검색", response = Map.class)
    @GetMapping("/allsymptoms/{symptomId}")
    public ResponseEntity<?> getFoodsBySymptom(
            @PathVariable @ApiParam(value = "증상Id", required = true) Long symptomId){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try{
            List<FoodDto> result = foodService.getFoodsBySymptom(symptomId);
            if(result == null){
                logger.debug("음식 조회결과 : {}", "해당 증상에 따른 음식 없음");
                resultMap.put("result", null);
                resultMap.put("message", "해당 증상에 따른 음식이 존재하지 않음");
                status = HttpStatus.ACCEPTED;
                return new ResponseEntity<>(resultMap, status);
            }
            logger.debug("증상에 따른 음식 조회 결과 : {}", "성공");
            resultMap.put("list", result);
            resultMap.put("message", SUCCESS);
            status = HttpStatus.OK;
        }catch (Exception e){
            e.printStackTrace();
            logger.error("증상에 따른 음식 조회 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "레시피 페이지에 필요한 정보 반환", notes = "레시피 페이지 구성에 필요한 요리 제목, 내용, 재료, 이미지 등등", response = Map.class)
    @GetMapping("/recipe-info/{foodId}")
    public ResponseEntity<?> getInfoByFoodName(
            @PathVariable @ApiParam(value = "요리 이름", required = true) Long foodId){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

//        try{
//
//        }
        return null;
    }
}
