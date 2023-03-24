package com.ssafy.pnut.service;

import com.ssafy.pnut.repository.CommentRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class CommentServiceImpl implements CommentService{
    final CommentRepository commentRepository;
}
