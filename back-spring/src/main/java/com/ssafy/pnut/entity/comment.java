package com.ssafy.pnut.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class comment {
    @Id
    @Column(name = "comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id = null;

    @ManyToOne
    @JoinColumn(name = "user_email")
//    @Column(name = "user_email")
    User userEmail;

    @ManyToOne
    @JoinColumn(name = "board_id")
    board boardId;

    String content;

    @JsonFormat(pattern = "YYYY-MM-DD HH:mm:ss")
    @Column(name = "create_date")
    LocalDateTime createDate;
}
