package org.th.studexa.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.th.studexa.assigment.Assignment;
import org.th.studexa.authentication.UserService;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private UserService userService;

    public StudentProfile getProfile(long id) {
        List<StudentProfile> profile = studentRepository.findByUser(userService.getUser(id));
        if (profile.isEmpty()) {throw new IllegalArgumentException("No student found");}
        return profile.getFirst();
    }

    public List<Assignment> getAssignments(long studentId) {
        StudentProfile profile = studentRepository.findById(studentId).orElse(null);
        if (profile == null) {throw new IllegalArgumentException("No student found");}
        return profile.getAssignments();
    }

}