package com.skilldistillery.donut.service;

import java.util.List;

import com.skilldistillery.donut.entities.Store;

public interface StoreService {
	
	List<Store> getStoreList();
	
	Store getStoreById(int id);
	

}
