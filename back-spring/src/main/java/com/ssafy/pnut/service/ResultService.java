package com.ssafy.pnut.service;

import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.question;
import com.ssafy.pnut.entity.result;

public interface ResultService {

    void save(result Result);

    void deleteByQuestionIdAndUserEmail(question questionId, User userEmail);


}
