package com.skilldistillery.donut.repositories;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
class StoreRepositoryTest {
	
	@Autowired
	StoreRepository storeRepo;

	@Test
	void test_Donut_Repository_methods() {
		assertEquals("Rolling Pin", storeRepo.findById(1).getName());
		assertTrue(storeRepo.findAll().size()>0);
	}
	

}
