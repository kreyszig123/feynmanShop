package com.feynman.application.config;

import com.feynman.application.document.Product;
import com.feynman.application.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Arrays;
import java.util.List;

@EnableMongoRepositories(basePackageClasses = ProductRepository.class)
@Configuration
public class MongoDBConfig {
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository) {
        return strings -> {
            List<Integer> appleVariantIDs= Arrays.asList(11,12,13);
            List<String> appleVariantColours=Arrays.asList("red","blue","black");
            List<String> appleVariantSizes=Arrays.asList("32","64","128");
            List<Integer> appleVariantQuantities=Arrays.asList(10,25,13);
            List<Double> appleVariantPrices=Arrays.asList(1500.45,1499.30,1550.91);

            productRepository.save(new Product(1,
                                                "Apple Iphone 11",
                                                appleVariantIDs,
                                                appleVariantColours,
                                                appleVariantSizes,
                                                appleVariantQuantities,
                                                appleVariantPrices
                                    ));

            List<Integer> jblVariantIDs=Arrays.asList(21,22);
            List<String> jblVariantColours=Arrays.asList("blue","black");
            List<String> jblVariantSizes=Arrays.asList("small","large");
            List<Integer> jblVariantQuantities=Arrays.asList(9,32);
            List<Double> jblVariantPrices=Arrays.asList(150.25,200.45);

            productRepository.save(new Product(2,
                                                "JBL Flip 4",
                                                jblVariantIDs,
                                                jblVariantColours,
                                                jblVariantSizes,
                                                jblVariantQuantities,
                                                jblVariantPrices
                                    ));


        };
    }

}
