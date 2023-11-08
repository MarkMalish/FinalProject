package com.demo.UserDB.Service.IMPL;
import com.demo.UserDB.DTO.LoginDTO;
import com.demo.UserDB.DTO.UserDTO;
import com.demo.UserDB.Entity.User;
import com.demo.UserDB.Repo.UserRepo;
import com.demo.UserDB.Service.UserService;
import com.demo.UserDB.Responce.LoginResponce;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getId(),
                userDTO.getName(),
                userDTO.getSurname(),
                userDTO.getUsername(),
                userDTO.getEmail(),
                this.passwordEncoder.encode(userDTO.getPassword())
        );
        userRepo.save(user);

        return user.getName();
    }

    UserDTO userDTO;

    @Override
    public LoginResponce loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponce("Login Success", true);
                } else {
                    return new LoginResponce("Login Failed", false);
                }
            } else {

                return new LoginResponce("password Not Match", false);
            }
        } else {
            return new LoginResponce("Email not exits", false);
        }
    }
}
