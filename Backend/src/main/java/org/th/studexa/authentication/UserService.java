package org.th.studexa.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.th.studexa.exceptions.DuplicateException;
import org.th.studexa.exceptions.NotFound;
import org.th.studexa.student.StudentProfile;
import org.th.studexa.student.StudentRepository;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private StudentRepository studentRepo;

    public UsersResponseDto register(User user) {
        if (!userRepo.existsByEmail(user.getEmail())){
            User saved =  userRepo.save(user);
            if (saved.getRole().equals(Roles.Student)){
                StudentProfile profile = new StudentProfile();
                profile.setUser(saved);
                studentRepo.save(profile);
            }
            return new UsersResponseDto(saved.getId(),saved.getRole());
        }
        throw new DuplicateException("User","email"); // if user already exists
    }

    public UsersResponseDto login(UsersRequestDto request) {
        if (!userRepo.existsByEmail(request.email())){
            throw new NotFound("User with email "+request.email());
        }
        User user = userRepo.findByEmail(request.email());
        if (!user.getPassword().equals(request.password())){
            throw new IllegalArgumentException("Password Incorrect");
        }
        return new UsersResponseDto(user.getId(),user.getRole());
    }

    public User getUser(long id){
        return userRepo.findById(id).orElse(null);
    }

}
