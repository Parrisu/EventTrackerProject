package com.skilldistillery.donut.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class StoreServiceTest {
	
	@Autowired
	StoreService storeServ;

	@Test
	void test() {
		assertTrue(storeServ.getStoreList().size()>1);
		assertEquals("Rolling Pin", storeServ.getStoreById(1).getName());
	}

}
