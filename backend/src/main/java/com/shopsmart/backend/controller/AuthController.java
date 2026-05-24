package com.shopsmart.backend.controller;

import com.shopsmart.backend.dto.LoginRequest;
import com.shopsmart.backend.dto.RegisterRequest;
import com.shopsmart.backend.entity.User;
import com.shopsmart.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        userRepository.save(user);

        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {

        Optional<User> user = userRepository.findByEmail(request.getEmail());

        if (user.isPresent() &&
                passwordEncoder.matches(
                        request.getPassword(),
                        user.get().getPassword()
                )) {
            return "Login successful";
        }

        return "Invalid credentials";
    }
}