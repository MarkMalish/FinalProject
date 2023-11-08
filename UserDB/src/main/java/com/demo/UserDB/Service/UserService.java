package com.demo.UserDB.Service;

import com.demo.UserDB.DTO.LoginDTO;
import com.demo.UserDB.DTO.UserDTO;
import com.demo.UserDB.Responce.LoginResponce;

public interface UserService {

    String addUser(UserDTO userDTO);
    LoginResponce loginUser(LoginDTO loginDTO);


}
