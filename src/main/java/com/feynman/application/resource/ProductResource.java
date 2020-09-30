package com.feynman.application.resource;

import com.feynman.application.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping
@CrossOrigin("*")
public class ProductResource {
    private ProductRepository productRepository;

    public ProductResource(ProductRepository productRepository){
        this.productRepository=productRepository;
    }



    @GetMapping(path="{productId}")
    @ResponseBody
    public List<String> getQuantityAndPrice(@PathVariable("productId") Integer productId,
                                                   @RequestParam(name="colour") String colour,
                                                   @RequestParam(name="size")String size){
        Integer quantity= productRepository.findById(productId).get().getQuantity(productId,colour,size);
        Double price= productRepository.findById(productId).get().getPrice(productId,colour,size);
        return new ArrayList<String>(){{
            add(quantity.toString());
            add(price.toString());
        }};

    }


}
