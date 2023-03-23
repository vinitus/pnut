package com.ssafy.pnut.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Food {
    @Id
    private Long foodId;
    private String name;
    private String desc;
    private int time;
    private String efficiency;
}
