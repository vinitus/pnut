package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.FoodDto;
import com.ssafy.pnut.dto.IngredientDto;

import java.util.List;

public interface FoodService {
    List<IngredientDto> getIngredients();
    List<FoodDto> getFoods();
}
