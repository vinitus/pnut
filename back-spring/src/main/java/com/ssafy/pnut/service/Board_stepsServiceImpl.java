package com.ssafy.pnut.service;

import com.ssafy.pnut.dto.BoardReq;
import com.ssafy.pnut.dto.BoardStepsReq;
import com.ssafy.pnut.repository.Board_stepsRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
public class Board_stepsServiceImpl implements Board_stepsService{
    final Board_stepsRepository board_stepsRepository;

    @Override
    public void save(List<HashMap<String, String>> Recipe_steps) {

        board_stepsRepository.save(BoardStepsReq.toEntity());
    }
}
