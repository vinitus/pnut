package com.ssafy.pnut.dto;

import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class BoardDto {

    private String thumbnail_image_url;

    private String title;

    private String content;

    private int time;

    private int quantity;

    private String ingredients;

    private User userEmail;

    @Builder
    public BoardDto(String thumbnail_image_url, String title, String content, int time, int quantity, String ingredients, User userEmail) {
        this.content = content;
        this.title = title;
        this.ingredients = ingredients;
        this.quantity = quantity;
        this.time = time;
        this.thumbnail_image_url = thumbnail_image_url;
        this.userEmail = userEmail;
    }

    public board toEntity(LocalDateTime currentTime) {
        return board.builder().content(content).
                ingredients(ingredients).
                quantity(quantity).
                time(time).
                userEmail(userEmail).
                createDate(currentTime).
                title(title).
                thumbnail_image_url(thumbnail_image_url).build();
    }


}
