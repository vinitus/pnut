package com.ssafy.pnut.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class like {
    @Id
    @Column(name = "like_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id = null;

    @ManyToOne
    @JoinColumn(name = "user_email")
//    @Column(name = "user_email")
    User userEmail;

    @ManyToOne
    @JoinColumn(name = "board_id")
    board boardId;
}
