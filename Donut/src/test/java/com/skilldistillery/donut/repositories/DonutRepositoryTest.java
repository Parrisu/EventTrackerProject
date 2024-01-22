package com.skilldistillery.donut.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class DonutRepositoryTest {
	
	@Autowired
	DonutRepository donutRepo;

	@Test
	void test_Donut_Repository_methods() {
		assertTrue(donutRepo.findByStoreId(1).size()>0);
		assertEquals("Glazed Donut", donutRepo.findById(1).getName());
	}
	

}
