package org.th.studexa.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.th.studexa.authentication.User;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<StudentProfile, Long> {
    List<StudentProfile> findByUser(User user);
    boolean existsByUser(StudentProfile studentProfile);
}