package com.demo.UserDB.Controller;
import com.demo.UserDB.DTO.LoginDTO;
import com.demo.UserDB.DTO.UserDTO;
import com.demo.UserDB.Responce.LoginResponce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.demo.UserDB.Service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:8085/")
@RequestMapping("/api/v1/user")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping(path="/save")
    public String saveUser(@RequestBody UserDTO userDTO) {
       String id = userService.addUser(userDTO);
       return id;
    }
    @PostMapping(path="/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponce loginResponce = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponce);
    }
    }
