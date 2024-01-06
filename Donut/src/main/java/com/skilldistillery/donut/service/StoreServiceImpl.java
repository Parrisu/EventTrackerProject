package com.skilldistillery.donut.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.donut.entities.Store;
import com.skilldistillery.donut.repositories.StoreRepository;

@Service
public class StoreServiceImpl implements StoreService {
	
	@Autowired
	StoreRepository storeRepo;

	@Override
	public List<Store> getStoreList() {
		return storeRepo.findAll();
	}

	@Override
	public Store getStoreById(int id) {
		return storeRepo.findById(id);
	}

	
}
