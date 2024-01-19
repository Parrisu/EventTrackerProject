package com.skilldistillery.donut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.donut.entities.Donut;
import com.skilldistillery.donut.entities.Store;
import com.skilldistillery.donut.repositories.DonutRepository;
import com.skilldistillery.donut.service.StoreService;

import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class StoreController {

	@Autowired
	StoreService storeServ;

	@Autowired
	DonutRepository donutRepo;

	@GetMapping({ "stores", "stores/" })
	public List<Store> getStores() {
		return storeServ.getStoreList();
	}

	@GetMapping("stores/{id}")
	public Store getStore(@PathVariable("id") int id, HttpServletResponse res) {
		Store store = storeServ.getStoreById(id);
		if (store != null) {
			res.setStatus(200);
		} else {
			res.setStatus(404);
		}
		return store;
	}

	@GetMapping("stores/{id}/donuts")
	public List<Donut> getDonutsByStore(@PathVariable("id") int id, HttpServletResponse res) {
		List<Donut> donuts = null;

		Store store = storeServ.getStoreById(id);
		if (store != null) {
			donuts = donutRepo.findByStoreId(id);
			for (int i = 0; i < donuts.size(); i++) {
				if (donuts.get(i).isEnabled() == false) {
					donuts.remove(i);
				}
			}
			res.setStatus(200);

		} else {
			res.setStatus(404);
		}

		return donuts;
	}

}
