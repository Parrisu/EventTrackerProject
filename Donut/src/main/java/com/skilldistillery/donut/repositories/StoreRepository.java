package com.skilldistillery.donut.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.donut.entities.Store;

public interface StoreRepository extends JpaRepository<Store, Integer> {

	Store findById(int id);
	
	
}
