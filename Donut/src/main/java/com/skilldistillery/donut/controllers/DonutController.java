package com.skilldistillery.donut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.donut.entities.Donut;
import com.skilldistillery.donut.service.DonutService;

@RestController
@RequestMapping("api")
public class DonutController {
	
	@Autowired
	DonutService donutServ;
	
	@GetMapping("donuts")
	public List<Donut> getDonuts(){
		return donutServ.getDonutList();
	}

}
