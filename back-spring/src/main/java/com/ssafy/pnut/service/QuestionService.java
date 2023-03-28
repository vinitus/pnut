package com.ssafy.pnut.service;

import com.ssafy.pnut.entity.category;
import com.ssafy.pnut.entity.question;

import java.util.List;

public interface QuestionService {

    List<question> findAll();

    List<question> findAllByCategoryIdOrderById(category categoryId);
}
