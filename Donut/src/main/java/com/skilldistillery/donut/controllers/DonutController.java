package com.skilldistillery.donut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class DonutController {

	@Autowired
	DonutService donutServ;

	@GetMapping({ "donuts", "donuts/" })
	public List<Donut> getDonuts(HttpServletResponse res) {
		List<Donut> donuts = donutServ.getDonutList();
		if(donuts != null) {
			res.setStatus(200);
		} else {
			res.setStatus(500);
		}
		return donuts;
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
	public Donut addDonut(@RequestBody Donut donut, HttpServletResponse res,
			HttpServletRequest req
			) {
		Donut newDonut = null;
		try {
			newDonut = donutServ.createDonut(donut);
			if(newDonut == null) {
				throw new Exception();
			}
			res.setStatus(201);
			res.setHeader("Location", req.getRequestURL().append("/").append(newDonut.getId()).toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return newDonut;
	}

	@PutMapping("donuts/{id}")
	public Donut updateDonut(@PathVariable("id") int id, @RequestBody Donut donut, HttpServletResponse res,
			HttpServletRequest req
			) {
		Donut updateDonut = null;
		if (donutServ.getDonutById(id)!=null) {
			try {
				updateDonut = donutServ.updateDonut(id, donut);
				res.setStatus(200);
				res.setHeader("Location", req.getRequestURL().append("/").append(updateDonut.getId()).toString());
			} catch (Exception e) {
				e.printStackTrace();
				res.setStatus(400);
			}
		} else {
			res.setStatus(404);
		}

		return updateDonut;

	}

	@DeleteMapping("donuts/{id}")
	public boolean deleteDonut(@PathVariable("id") int id, HttpServletResponse res) {
		boolean deleted = false;
		if(donutServ.getDonutById(id)!=null) {
			deleted = donutServ.deleteDonut(id);
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
		return deleted;
	}

}
