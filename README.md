# feynmanShop

##Setup
Open pom.xml as a Project and do Maven install which will create the "target" folder.
```
target> java application-0.0.1-SNAPSHOT.jar
src/main/frontend> npm start
```

##API Documentation
###GET Request
```
getQuantityAndPrice(productID,colour,size)
```
```
INPUT- Integer productID, String colour, String size
OUTPUT- [quantity,price]
```
