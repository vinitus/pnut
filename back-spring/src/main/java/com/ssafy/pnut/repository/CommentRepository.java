package com.ssafy.pnut.repository;

import com.ssafy.pnut.entity.comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<comment, Long> {
}
