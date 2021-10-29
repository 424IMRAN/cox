package com.cox.selfservice.services.users;

import com.cox.selfservice.dao.entity.users.Users;

public interface UserService {

    Users saveUser(Users user);

    Users findUserbyEmail(String preferredUsername);
}
