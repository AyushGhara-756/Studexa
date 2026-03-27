package org.th.studexa.authentication;

import java.io.Serializable;

public record UsersResponseDto(Long id, Roles role) implements Serializable {
}