package org.th.studexa.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
class StudentController {

    @Autowired
    private StudentService studentService;

    @QueryMapping(name = "student")
    public StudentProfile getStudentProfile(@Argument long id) {
        return studentService.getProfile(id);
    }
}
