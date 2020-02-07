package com.ianperfitt.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ianperfitt.Entities.Event;
import com.ianperfitt.Services.EventService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {

	@Autowired
	private EventService es;

	@RequestMapping("/allevents")
	public List<Event> getAllEvents() {
		return es.getAllEvents();
	}

}
