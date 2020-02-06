package com.ianperfitt.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ianperfitt.Entities.User;
import com.ianperfitt.Services.UserService;

@RestController
//@CrossOrigin(origins = "http://localhost:4200") 
public class UserController {

	@Autowired
	private UserService us;

	@RequestMapping("/Users")
	public List<User> getUsers() {
		return us.getUsers();
	}
	
}
