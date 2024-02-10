package com.example.springdish.menu.repositories;

import com.example.springdish.menu.entities.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {

}
