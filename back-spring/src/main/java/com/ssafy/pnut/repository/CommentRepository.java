package com.ssafy.pnut.repository;

import com.ssafy.pnut.dto.CommentDto;
import com.ssafy.pnut.entity.board;
import com.ssafy.pnut.entity.comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<comment, Long> {

    void save(CommentDto commentDto);

    List<comment> findAllByBoardId(board Board);
}
