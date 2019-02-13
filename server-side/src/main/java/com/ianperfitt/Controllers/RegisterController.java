package com.ianperfitt.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ianperfitt.Entities.User;
import com.ianperfitt.Services.UserService;

@RestController
@RequestMapping("/Register")
public class RegisterController {

	@Autowired
	private UserService us;

	@PostMapping
	public User register(@RequestBody User u) {
		System.out.println("Made it here");
		return us.register(u);
	}

}
