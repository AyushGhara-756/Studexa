package org.th.studexa.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public UsersResponseDto register(User user) {
        if (!userRepo.existsByEmail(user.getEmail())){
            User saved =  userRepo.save(user);
            return new UsersResponseDto(saved.getId(),saved.getRole());
        }
            throw new IllegalArgumentException("User already exists with the email"); // if user already exists
    }

    public UsersResponseDto login(UsersRequestDto request) {
        if (!userRepo.existsByEmail(request.email())){
            return null;
        }
        User user = userRepo.findByEmail(request.email());
        if (user == null || !user.getPassword().equals(request.password())){return null;}
        return new UsersResponseDto(user.getId(),user.getRole());
    }
}
