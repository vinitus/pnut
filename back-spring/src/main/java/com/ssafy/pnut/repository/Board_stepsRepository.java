package com.ssafy.pnut.repository;

import com.ssafy.pnut.entity.board_steps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Board_stepsRepository extends JpaRepository<board_steps, Long> {
}
