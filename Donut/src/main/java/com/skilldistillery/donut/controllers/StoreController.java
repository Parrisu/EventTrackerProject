package com.skilldistillery.donut.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.donut.entities.Store;
import com.skilldistillery.donut.service.StoreService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
public class StoreController {

	@Autowired
	StoreService storeServ;

	@GetMapping({ "stores", "stores/" })
	public List<Store> getStores() {
		return storeServ.getStoreList();
	}

	@GetMapping("stores/{id}")
	public Store getStore(@PathVariable("id") int id, HttpServletResponse res) {
		return storeServ.getStoreById(id);
	}


}
