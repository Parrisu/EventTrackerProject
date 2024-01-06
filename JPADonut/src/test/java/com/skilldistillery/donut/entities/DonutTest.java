package com.skilldistillery.donut.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.Month;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class DonutTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Donut donut;
	private Store store;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPADonut");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		donut = em.find(Donut.class, 1);
		store = em.find(Store.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		donut = null;
	}
	
	@Test
	void test_donut_mapping() {
		assertEquals("Glazed", donut.getName());
		assertEquals(2, donut.getPrice());
		assertEquals(1000, donut.getCalories());
		assertEquals(2024, donut.getCreatedAt().getYear());
		assertEquals(Month.JANUARY, donut.getCreatedAt().getMonth());
		assertEquals(5, donut.getUpdatedAt().getDayOfMonth());
		assertEquals(2024, donut.getUpdatedAt().getYear());
		assertEquals(Month.JANUARY, donut.getUpdatedAt().getMonth());
		assertEquals(5, donut.getUpdatedAt().getDayOfMonth());
	}
	
	@Test
	void test_donut_store_mapping() {
		assertEquals("Rolling Pin", donut.getStore().getName());
		assertEquals("Camarillo", donut.getStore().getLocation());
	}

}
