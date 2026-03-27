package org.th.studexa.student;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link StudentProfile}
 */
public record StudentProfileDto(Long id, Long userId, List<Long> assignmentIds) implements Serializable {
}