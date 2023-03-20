package com.ssafy.pnut.entity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class board_steps {
    @Id
    @Column(name = "board_steps_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id = null;

    @ManyToOne
    @JoinColumn(name = "board_id")
    board boardId;

    String content;

    @Column(name = "image_url")
    String imageUrl;

}
