package com.bluemiv.user.domain;

import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class User {

    private long id;

    private String username;
    private String password;

    private String email;
}
