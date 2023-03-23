package com.ssafy.pnut.dto;

import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.board;
import lombok.Builder;

import java.time.LocalDateTime;

public class SelectAllRecipeRes {

    private Object thumbnail_image_url;

    private String title;

    private String content;

    private int time;

    private int quantity;

    private String ingredients;

    private User userEmail;

    @Builder
    public SelectAllRecipeRes(Object thumbnail_image_url, String title, String content, int time, int quantity, String ingredients, User userEmail) {
        this.content = content;
        this.title = title;
        this.ingredients = ingredients;
        this.quantity = quantity;
        this.time = time;
        this.thumbnail_image_url = thumbnail_image_url;
        this.userEmail = userEmail;
    }


}
