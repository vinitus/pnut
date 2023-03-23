package com.ssafy.pnut.service;

import com.ssafy.pnut.repository.LikeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@AllArgsConstructor
public class LikeServiceImpl implements LikeService{
    final LikeRepository likeRepository;
}
