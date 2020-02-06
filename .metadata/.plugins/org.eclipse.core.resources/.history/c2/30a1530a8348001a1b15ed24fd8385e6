package com.ianperfitt.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ianperfitt.Entities.User;
import com.ianperfitt.Services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegisterController {

	@Autowired
	private UserService us;

	@GetMapping("/users")
	public List<User> getUsers() {
		return us.getUsers();
	}

}
