package com.ianperfitt.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ianperfitt.Entities.User;
import com.ianperfitt.Repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo ur;

	public void register(User u) {
		System.out.println(ur.findByEmailAddress(u));

	}

}
