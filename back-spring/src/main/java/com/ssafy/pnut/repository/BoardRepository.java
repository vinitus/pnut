package com.ssafy.pnut.repository;

import com.ssafy.pnut.dto.RecipeCreateReq;
import com.ssafy.pnut.entity.board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<board, Long> {
    void deleteById(Long id);
}
