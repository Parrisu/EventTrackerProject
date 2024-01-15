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
		List<Donut> donuts = donutRepo.findAll();
		for (int i = 0; i<donuts.size(); i++) {
			if(donuts.get(i).isEnabled()==false) {
				donuts.remove(i);
			}
		}
		return donuts;
	}

	@Override
	public Donut getDonutById(int id) {
		return donutRepo.findById(id);
	}

	@Override
	public Donut createDonut(Donut donut) {
		try {
			donutRepo.save(donut);
		} catch (Exception e) {
			e.printStackTrace();
			donut = null;
		}
		return donut;
	}

	@Override
	public boolean deleteDonut(int id) {
		boolean isDeleted = false;
		Donut deactivate = donutRepo.findById(id);
		
		if(deactivate != null) {
			donutRepo.deleteById(id);
			isDeleted = !donutRepo.existsById(id);
		}
		
		return isDeleted;
	}

	@Override
	public Donut updateDonut(int id, Donut donut) {
		Donut updateDonut = donutRepo.findById(id);
		updateDonut.setName(donut.getName());
		updateDonut.setPrice(donut.getPrice());
		updateDonut.setCalories(donut.getCalories());
		updateDonut.setStore(donut.getStore());
		donutRepo.saveAndFlush(updateDonut);
		return updateDonut;
	}

	
	
}
