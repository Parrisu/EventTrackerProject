package com.skilldistillery.donut.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DonutServiceTest {
	
	@Autowired
	DonutService donutServ;

	@Test
	void test() {
		assertTrue(donutServ.getDonutList().size()>0);
		assertEquals("Glazed Donut", donutServ.getDonutById(1).getName());
	}

}
