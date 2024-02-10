package com.example.springdish.menu.controllers;

import com.example.springdish.menu.entities.Food;
import com.example.springdish.menu.services.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class FoodCtrl {

    @Autowired
    private FoodService foodService;

    @GetMapping
    public ResponseEntity<List<Food>> findAll() {
        List<Food> list = foodService.findAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Food> findById(@PathVariable Long id) {
        Food list = foodService.findById(id);
        return ResponseEntity.ok(list);
    }

    @PostMapping("/registerFood")
    public ResponseEntity<Food> registerFood(@RequestBody Food data) {
        Food create = foodService.save(data);
        return ResponseEntity.ok(create);
    }

    @PutMapping("/updateFood/{id}")
    public ResponseEntity<Food> updateFood(@PathVariable Long id, @RequestBody Food data) {
        Food updateFood = foodService.update(id, data);
        return ResponseEntity.ok(updateFood);
    }

    @DeleteMapping("/deleteFood/{id}")
    public ResponseEntity<String> deleteFood(@PathVariable Long id) {
        foodService.delete(id);
        return ResponseEntity.ok("User deleted with success.");
    }






}
