package com.ssafy.pnut.repository;

import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.board;
import com.ssafy.pnut.entity.likeTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikeRepository extends JpaRepository<likeTable, Long> {
    Optional<likeTable> findByBoardIdAndUserEmail(board board, User user);

    void deleteById(Long id);
}
