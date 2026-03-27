package org.th.studexa.student;

import java.io.Serializable;

public record StudentRequestDto(
        Long userId
        ) implements Serializable {
}