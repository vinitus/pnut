package com.ssafy.pnut.repository;

import com.ssafy.pnut.entity.nutrientQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NutrientQuestionRepository extends JpaRepository<nutrientQuestion, Long> {
}
