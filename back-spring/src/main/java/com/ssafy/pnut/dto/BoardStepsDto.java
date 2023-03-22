package com.ssafy.pnut.dto;

import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.entity.board;
import com.ssafy.pnut.entity.boardSteps;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class BoardStepsDto {
    private board boardId;

    private String content;

    private String imageUrl;

    @Builder
    public BoardStepsDto(board Board, String content, String image_url) {
        this.content = content;
        this.boardId = Board;
        this.imageUrl = imageUrl;
    }

    public boardSteps toEntity() {
        return boardSteps.builder().content(content).boardId(boardId).imageUrl(imageUrl).build();
    }
}
