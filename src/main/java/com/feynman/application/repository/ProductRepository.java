package com.feynman.application.repository;

import com.feynman.application.document.Product;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProductRepository extends MongoRepository<Product,Integer> {



}
