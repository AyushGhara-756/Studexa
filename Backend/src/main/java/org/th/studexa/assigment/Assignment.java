package org.th.studexa.assigment;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.th.studexa.authentication.User;

@Getter
@Setter
@Entity
@Table(name = "assignment")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assignment_id", nullable = false)
    private Long id;
    @Column(name = "assignment_name", nullable = false)
    private String name;
    @Column(name = "assignment_desc")
    private String description;

    @ManyToOne
    @JoinTable(
            name = "student",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private User user;

}