package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.entity.board;

public interface BoardService {

    void deleteById(Long id);

    board save(RecipeCreateReq recipeCreateReq, String fileName);
}
