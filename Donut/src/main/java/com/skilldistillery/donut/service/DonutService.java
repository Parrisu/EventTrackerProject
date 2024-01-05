package com.skilldistillery.donut.service;

import java.util.List;

import com.skilldistillery.donut.entities.Donut;

public interface DonutService {
	
	List<Donut> getDonutList();
	
	Donut getDonutById(int id);

}
