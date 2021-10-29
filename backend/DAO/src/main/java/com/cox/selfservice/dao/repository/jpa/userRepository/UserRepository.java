package com.cox.selfservice.dao.repository.jpa.userRepository;

import com.cox.selfservice.dao.entity.users.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users,String>{
    Users findUserByEmail(String email);
}
