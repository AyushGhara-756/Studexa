package org.th.studexa.assigment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.th.studexa.student.StudentProfile;

import java.util.List;

@Controller
public class AssignmentController {

    @Autowired
    private AssignmentRepository assignmentRepo;

    @QueryMapping(name = "assignments")
    public List<Assignment> getAll(StudentProfile student) {
        return assignmentRepo.findByStudent(student);
    }
}
