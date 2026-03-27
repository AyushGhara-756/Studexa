package org.th.studexa.student;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.th.studexa.authentication.User;
import org.th.studexa.assigment.Assignment;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "student")
public class StudentProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id", nullable = false)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(mappedBy = "id")
    private List<Assignment> assignments;
//    private List<Subject> subjects;


}