package com.ssafy.pnut.dto;

import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.board;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class SelectAllRecipeRes {

    private String thumbnail_image_url;

    private String title;

    private int visit;

    private String nickName;

    @Builder
    public SelectAllRecipeRes(String thumbnail_image_url, String title, Integer visit, String nickName) {
        this.title = title;
        this.visit = visit;
        this.thumbnail_image_url = thumbnail_image_url;
        this.nickName = nickName;
    }

}
