package com.cox.selfservice.services.users;

import com.cox.selfservice.dao.entity.users.Users;
import com.cox.selfservice.dao.repository.jpa.userRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Users saveUser(Users user) {
        return userRepository.save(user);
    }

    @Override
    public Users findUserbyEmail(String email) {
        return userRepository.findUserByEmail(email);
    }
}
