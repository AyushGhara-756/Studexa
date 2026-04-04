package org.th.studexa.authentication;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.apache.catalina.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000")
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

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        if (session!=null) {
            session.invalidate();
        }
        return ResponseEntity.ok(null);
    }

}
