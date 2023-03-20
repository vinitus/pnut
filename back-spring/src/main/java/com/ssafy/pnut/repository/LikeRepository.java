package com.ssafy.pnut.repository;

import com.ssafy.pnut.entity.like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<like, Long> {
}
