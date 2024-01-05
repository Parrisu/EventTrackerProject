package com.skilldistillery.donut.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.donut.entities.Donut;

public interface DonutRepository extends JpaRepository<Donut, Integer> {

	Donut findById(int id);
	
	List<Donut> findByStoreId(int id);
	
}
