package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.BoardDto;
import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.board;
import com.ssafy.pnut.repository.BoardRepository;
import com.ssafy.pnut.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class BoardServiceImpl implements BoardService{
    final BoardRepository boardRepository;
    final UserRepository userRepository;

    @Override
    public void deleteById(Long id) {
        boardRepository.deleteById(id);
    }

    @Override
    public board save(RecipeCreateReq recipeCreateReq, String fileName) {
        BoardDto boardDto = new BoardDto();
        boardDto.setContent(recipeCreateReq.getContent());
        boardDto.setTime(recipeCreateReq.getTime());
        boardDto.setTitle(recipeCreateReq.getTitle());
        boardDto.setQuantity(recipeCreateReq.getQuantity());
        boardDto.setIngredients(recipeCreateReq.getIngredients());
        boardDto.setThumbnail_image_url(fileName);

        User userEmail = userRepository.findByEmail(recipeCreateReq.getUserEmail());
        boardDto.setUserEmail(userEmail);

        board Board = boardDto.toEntity(LocalDateTime.now());
        boardRepository.save(Board);
        return Board;
    }


    public Optional<board> findById(Long id) {
        return boardRepository.findById(id);
    }
}
