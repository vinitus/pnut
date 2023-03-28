package com.ssafy.pnut.repository;

import com.ssafy.pnut.entity.nutrientQuestion;
import com.ssafy.pnut.entity.result;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ResultRepository extends JpaRepository<result, Long> {
}
