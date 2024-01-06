package com.skilldistillery.donut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@GetMapping({ "donuts", "donuts/" })
	public List<Donut> getDonuts() {
		return donutServ.getDonutList();
	}

	@GetMapping("donuts/{id}")
	public Donut getDonut(@PathVariable("id") int id, HttpServletResponse res) {
		Donut donut = donutServ.getDonutById(id);

		if (donut != null && donut.isEnabled() == true) {
			res.setStatus(200);
		} else {
			res.setStatus(404);
			donut = null;
		}
		return donut;
	}

	@PostMapping({ "donuts", "donuts/" })
	public Donut addDonut(@RequestBody Donut donut, HttpServletResponse res) {
		Donut newDonut = null;
		try {
			newDonut = donutServ.createDonut(donut);
			if(newDonut == null) {
				throw new Exception();
			}
			res.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(500);
		}
		return newDonut;
	}

	@PutMapping("donuts/{id}")
	public Donut updateDonut(@PathVariable("id") int id, @RequestBody Donut donut, HttpServletResponse res) {
		Donut updateDonut = null;
		try {
			updateDonut = donutServ.updateDonut(id, donut);
			res.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(500);
		}

		return updateDonut;

	}

	@DeleteMapping("donuts/{id}")
	public boolean deleteDonut(@PathVariable("id") int id, HttpServletResponse res) {
		return donutServ.deleteDonut(id);
	}

}
