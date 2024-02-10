package com.example.springdish.menu.services;


import com.example.springdish.menu.entities.Food;
import com.example.springdish.menu.repositories.FoodRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public List<Food> findAll() {
        return foodRepository.findAll();
    }

    public Food findById(Long id) {
        return foodRepository.findById(id).get();
    }

    public Food save(Food data) {
        return foodRepository.save(data);
    }

    public Food update(Long id, Food data) {
        Food newObj = foodRepository.findById(id).get();
        newObj.setTitle(data.getTitle());
        newObj.setPrice(data.getPrice());
        newObj.setImage(data.getImage());
        return foodRepository.save(newObj);
    }

    public void delete(Long id) {
        findById(id);
        try{
            foodRepository.deleteById(id);
        }
        catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
