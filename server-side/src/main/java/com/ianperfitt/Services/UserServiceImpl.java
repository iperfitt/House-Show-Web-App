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
		if (ur.findByEmail(u.getEmail()) == null) {
			ur.save(u);
		}
	}

	@Override
	public User login(User u) {
		return ur.save(u);
	}
}
