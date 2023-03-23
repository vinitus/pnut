package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.BoardDto;
import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.dto.SelectOneRecipeRes;
import com.ssafy.pnut.entity.board;

import java.util.List;
import java.util.Optional;

public interface BoardService {

    void deleteById(Long id);

    board save(RecipeCreateReq recipeCreateReq, String fileName);

    List<BoardDto> findAll();

    Optional<board> findById(Long id);
}
