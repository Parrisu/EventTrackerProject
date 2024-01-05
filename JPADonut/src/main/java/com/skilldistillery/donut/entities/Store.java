package com.skilldistillery.donut.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Store {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	
	private String location;
	
	@JsonIgnore
	@OneToMany(mappedBy="store")
	private List<Donut> donuts;

	public Store() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public List<Donut> getDonuts() {
		return donuts;
	}

	public void setDonuts(List<Donut> donuts) {
		this.donuts = donuts;
	}

	@Override
	public String toString() {
		return "Store [id=" + id + ", name=" + name + ", location=" + location + ", donuts=" + donuts + "]";
	}
	
	
	
	

}
