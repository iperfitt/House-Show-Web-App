package com.ianperfitt.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ianperfitt.Services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

	@Autowired
	private UserService us;

	@RequestMapping("/login")
	public void register() {
		us.register(null);
	}

}
