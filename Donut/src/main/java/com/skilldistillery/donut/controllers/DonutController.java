package com.skilldistillery.donut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.donut.entities.Donut;
import com.skilldistillery.donut.service.DonutService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
public class DonutController {
	
	@Autowired
	DonutService donutServ;
	
	@GetMapping("donuts")
	public List<Donut> getDonuts(){
		return donutServ.getDonutList();
	}
	
	@GetMapping("donuts/{id}")
	public Donut getDonut(@PathVariable("id")int id, HttpServletResponse res) {
		Donut donut = donutServ.getDonutById(id);
		
		if(donut != null) {
			res.setStatus(200);
		} else {
			res.setStatus(404);
		}
		
		return donut;
	}
	
	@PostMapping("donuts/create")
	public Donut addDonut(@RequestBody Donut donut, HttpServletResponse res) {
		Donut newDonut = donutServ.createDonut(donut);
		return newDonut;
	}
	
	@DeleteMapping("donuts/{id}")
	public boolean deleteDonut(@PathVariable("id")int id, HttpServletResponse res) {
		return donutServ.deleteDonut(id);
	}

}
