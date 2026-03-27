package org.th.studexa.authentication;

import java.io.Serializable;

public record UsersRequestDto(
        String email,
        String password
        ) implements Serializable {
}