package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.FoodDto;
import com.ssafy.pnut.dto.IngredientDto;
import com.ssafy.pnut.entity.Food;
import com.ssafy.pnut.entity.Ingredient;
import com.ssafy.pnut.repository.FoodRepository;
import com.ssafy.pnut.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FoodServiceImpl implements FoodService{
    private FoodRepository foodRepository;
    private IngredientRepository ingredientRepository;
    @Override
    public List<IngredientDto> getIngredients() {
        List<IngredientDto> ingredientDtos = new ArrayList<>();
        List<Ingredient> ingredients = ingredientRepository.findAll();
        ingredients.forEach(x->ingredientDtos.add(IngredientDto.toDto(x)));
        return ingredientDtos;
    }

    @Override
    public List<FoodDto> getFoods() {
        List<FoodDto> foodDtos = new ArrayList<>();
        List<Food> foods = foodRepository.findAll();
        foods.forEach(x->foodDtos.add(FoodDto.toDto(x)));
        return foodDtos;
    }

    @Override
    public List<FoodDto> getFoodsBySymptom(long symptomId) {
        List<FoodDto> foodDtos = new ArrayList<>();

        return null;
    }
}
