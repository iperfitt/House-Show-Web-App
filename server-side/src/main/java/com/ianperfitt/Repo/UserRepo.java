package com.ianperfitt.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ianperfitt.Entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

}

