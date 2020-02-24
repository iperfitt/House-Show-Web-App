package com.ianperfitt.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ianperfitt.Entities.User;

public interface UserRepo extends JpaRepository<User, Long> {

}
