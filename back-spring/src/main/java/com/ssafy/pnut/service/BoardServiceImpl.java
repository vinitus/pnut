package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.BoardDto;
import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.repository.BoardRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class BoardServiceImpl implements BoardService{
    final BoardRepository boardRepository;

    @Override
    public void save(RecipeCreateReq recipeCreateReq) {
        BoardDto boardDto = new BoardDto();
        boardDto.setContent(recipeCreateReq.getContent());
        boardDto.setTime(recipeCreateReq.getTime());
        boardDto.setTitle(recipeCreateReq.getTitle());
        boardDto.setQuantity(recipeCreateReq.getQuantity());
        boardDto.setIngredients(recipeCreateReq.getIngredients());
        boardDto.setThumbnail_image_url(recipeCreateReq.getThumbnail_image_url());

        boardRepository.save(BoardDto.toEntity());
    }
}
