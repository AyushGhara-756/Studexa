package org.th.studexa.assigment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.th.studexa.exceptions.DuplicateException;
import org.th.studexa.exceptions.NotFound;
import org.th.studexa.student.StudentProfile;

import java.util.List;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepo;

    public List<Assignment> getAll(StudentProfile student){
        if (assignmentRepo.existsByStudent(student)){
            return assignmentRepo.findByStudent(student);
        }
        return null;
    }

    public Assignment addAssignment(Assignment assignment){
        if (!assignmentRepo.existsByName(assignment.getName())){
            return assignmentRepo.save(assignment);
        }
        throw new DuplicateException("assignment", "name "+assignment.getName());
    }

    public boolean deleteAssignment(Assignment assignment){
        if (assignmentRepo.existsByName(assignment.getName())){
            assignmentRepo.delete(assignment);
            return true;
        }
        throw new NotFound("Assignment");
    }

}
