package com.ssafy.pnut.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class BoardStepsReq {
    private List<HashMap<String, String>> recipe_steps;
}
