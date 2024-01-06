package com.skilldistillery.donut.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.donut.entities.Donut;
import com.skilldistillery.donut.repositories.DonutRepository;

@Service
public class DonutServiceImpl implements DonutService {
	
	@Autowired
	DonutRepository donutRepo;

	@Override
	public List<Donut> getDonutList() {
		return donutRepo.findAll();
	}

	@Override
	public Donut getDonutById(int id) {
		return donutRepo.findById(id);
	}

	@Override
	public Donut createDonut(Donut donut) {
		donutRepo.save(donut);
		return donut;
	}

	@Override
	public boolean deleteDonut(int id) {
		boolean isDeleted = false;
		
		if(donutRepo.existsById(id)) {
			donutRepo.deleteById(id);
			isDeleted = true;
		}
		
		return isDeleted;
	}

	
	
}
