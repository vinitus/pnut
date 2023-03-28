package com.ssafy.pnut.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class nutrientQuestion {
    @Id
    @Column(name = "nut_quest_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id = null;

    @ManyToOne
    @JoinColumn(name = "question_id")
    question questionId;

    @Column(name = "nutrient_id")
    Integer nutrientId;

}
