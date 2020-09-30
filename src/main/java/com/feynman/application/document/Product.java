package com.feynman.application.document;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class Product {
    @Id
    private Integer productId;
    private String productName;
    private List<Integer> variantIDs;
    private List<String> variantColours;
    private List<String> variantSizes;
    private List<Integer> variantQuantities;
    private List<Double> variantPrices;

    public Product(Integer productId,
                   String productName,
                   List<Integer> variantIDs,
                   List<String> variantColours,
                   List<String> variantSizes,
                   List<Integer> variantQuantities,
                   List<Double> variantPrices) {
        this.productId = productId;
        this.productName = productName;
        this.variantIDs = variantIDs;
        this.variantColours = variantColours;
        this.variantSizes = variantSizes;
        this.variantQuantities = variantQuantities;
        this.variantPrices = variantPrices;
    }



    public Integer getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public List<Integer> getVariantIDs() {
        return variantIDs;
    }

    public List<String> getVariantColours() {
        return variantColours;
    }

    public String getVariantColours(Integer variantId){
        return variantColours.get(variantIDs.indexOf(variantId));
    }

    public List<String> getVariantSizes() {
        return variantSizes;
    }

    public String getVariantSizes(Integer variantId){
        return variantSizes.get(variantIDs.indexOf(variantId));
    }

    public List<Integer> getVariantQuantities() {
        return variantQuantities;
    }

    public Integer getVariantQuantities(Integer variantId){
        return variantQuantities.get(variantIDs.indexOf(variantId));
    }

    public List<Double> getVariantPrices() {
        return variantPrices;
    }

    public Double getVariantPrices(Integer variantId){
        return variantPrices.get(variantIDs.indexOf(variantId));
    }



    public Integer getQuantity(Integer productId,String colour,String size){

        List<String> colours=getVariantColours();
        List<String> sizes=getVariantSizes();
        int c=colours.indexOf(colour);
        int s=sizes.indexOf(size);
        if(c!=-1 && s!=-1 && c==s)
            return variantQuantities.get(c);

        else return 0;
    }



    public Double getPrice(Integer productId,String colour,String size){
        List<String> colours=getVariantColours();
        List<String> sizes=getVariantSizes();
        int c=colours.indexOf(colour);
        int s=sizes.indexOf(size);
        if(c!=-1 && s!=-1 && c==s)
            return variantPrices.get(c);

        else return 0.0;
    }
}
