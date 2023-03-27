package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.CommentDto;
import com.ssafy.pnut.entity.comment;
import com.ssafy.pnut.repository.CommentRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.xml.stream.events.Comment;
import java.util.Optional;

@Service
@Slf4j
@AllArgsConstructor
public class CommentServiceImpl implements CommentService{
    final CommentRepository commentRepository;

    public void save(CommentDto commentDto) {
        commentRepository.save(commentDto.toEntity());
    };

    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    }

    public Optional<comment> findById(Long id) {
        return commentRepository.findById(id);
    }
}
