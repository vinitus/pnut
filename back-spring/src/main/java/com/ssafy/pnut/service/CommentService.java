package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.CommentDto;
import com.ssafy.pnut.entity.comment;

import java.util.Optional;

public interface CommentService {
    void save(CommentDto commentDto);

    void deleteById(Long id);

    Optional<comment> findById(Long id);
}
