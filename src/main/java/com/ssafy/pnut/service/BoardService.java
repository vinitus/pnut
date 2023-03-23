package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.BoardDto;
import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.entity.board;

import java.util.List;

public interface BoardService {

    void deleteById(Long id);

    board save(RecipeCreateReq recipeCreateReq, String fileName);

    List<BoardDto> findAll();
}
