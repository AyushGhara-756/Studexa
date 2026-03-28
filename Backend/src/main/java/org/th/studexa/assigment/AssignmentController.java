package org.th.studexa.assigment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.th.studexa.student.StudentProfile;
import org.th.studexa.student.StudentService;

import java.util.List;

@Controller
public class AssignmentController {

    @Autowired
    private AssignmentService assignService;
    @Autowired
    private StudentService studentService;

    @QueryMapping(name = "getAssignments")
    public List<Assignment> getAssignments(@Argument long studentId) {
        return assignService.getAll(studentService.getProfile(studentId));
    }

    @MutationMapping(name = "addAssignment")
    public boolean addAssignment(@Argument String name, @Argument String description, @Argument long studentId) {
        Assignment assignment = new Assignment();
        assignment.setName(name);
        assignment.setDescription(description);
        assignment.setStudent(studentService.getProfile(studentId));
        assignService.addAssignment(assignment);
        return true;
    }
}
