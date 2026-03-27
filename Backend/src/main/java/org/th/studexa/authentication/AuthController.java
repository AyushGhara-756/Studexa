package org.th.studexa.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        UsersResponseDto response = userService.register(user);
        if (response == null) {return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();}
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsersRequestDto request) {
        UsersResponseDto response = userService.login(request);
        if (response == null) {return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();}
        return ResponseEntity.ok(response);
    }

}
