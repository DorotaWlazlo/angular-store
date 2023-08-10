# Stationery store

### Dorota Wlazło

Api for this app is in the rpeository under this link: <https://github.com/DorotaWlazlo/stationery-store-api>

## User stories

```
As a customer,
So I can acquire new items,
I'd like to add specyfic product to my cart.
```

```
As a customer,
So I can change my order,
I'd like to remove a bagel from my basket.
```

```
As a customer,
So I know how much money I need,
I'd like to know the total cost of items in my cart.
```

```
As a customer,
So I know what the damage will be,
I'd like to know the cost of a product before I add it to my cart.
```

```
As a customer,
So my life will be easier,
I'd like to sort and filter the inventory.
```

```
As a customer,
So I can make informed decision,
I'd like to be able to see product details.
```

## Api model

| Class   | Field               | Method | Condition | Output |
|---------|---------------------|--------|-----------|--------|
| Product | long id             |        |           |        |
|         | String name         |        |           |        |
|         | String type         |        |           |        |
|         | String manufacturer |        |           |        |
|         | double price        |        |           |        |
|         | String description  |        |           |        |

| Class             | Field | Method                                                | Condition | Output                                            |
|-------------------|-------|-------------------------------------------------------|-----------|---------------------------------------------------|
| ProductRepository |       | List<Product> findByType(String type)                 | always    | List<Product> productsOfGivenType                 |
|                   |       | List<Product> findByManufacturer(String manufacturer) | always    | List<Product> productsByGivenManufacturer         |
|                   |       | List<String> findDistinctTypes()                      | always    | List<String>  typesOfProductsInRepository         |
|                   |       | List<String> findDistinctManufacturers()              | always    | List<String>  manufacturersOfProductsInRepository |

| Class          | Field                                | Method                                                       | Condition | Output                                            |
|----------------|--------------------------------------|--------------------------------------------------------------|-----------|---------------------------------------------------|
| ProductService | ProductRepository productRepository  | List<Product> getAllProducts()                               | always    | List<Product> allProducts                         |
|                |                                      | Product getProductById(Long productId)                       | always    | Product product                                   |
|                |                                      | List<Product> getProductsByType(String type)                 | always    | List<Product> productsOfGivenType                 |
|                |                                      | List<Product> getProductsByManufacturer(String manufacturer) | always    | List<Product> productsByGivenManufacturer         |
|                |                                      | List<String> getDistinctTypes()                              | always    | List<String>  typesOfProductsInRepository         |
|                |                                      | List<String> getDistinctManufacturers()                      | always    | List<String>  manufacturersOfProductsInRepository |

| Class          | Field                          | Method                                                                       | Condition         | Output                                         |
|----------------|--------------------------------|------------------------------------------------------------------------------|-------------------|------------------------------------------------|
| ProductService | ProductService productService  | ResponseEntity<List<Product>> getAllProducts()                               | always            | ResponseEntity<>(products, HttpStatus.OK)      |
|                |                                | ResponseEntity<Product> getProductById(Long id)                              | if product exists | ResponseEntity<>(product, HttpStatus.OK)       |
|                |                                |                                                                              | if not            | ResponseEntity<>(HttpStatus.NOT_FOUND)         |
|                |                                | ResponseEntity<List<Product>> getProductsByType(String type)                 | always            | ResponseEntity<>(products, HttpStatus.OK)      |
|                |                                | ResponseEntity<List<Product>> getProductsByManufacturer(String manufacturer) | always            | ResponseEntity<>(products, HttpStatus.OK)      |
|                |                                | ResponseEntity<List<String>> getDistinctTypes()                              | always            | ResponseEntity<>(types, HttpStatus.OK)         |
|                |                                | ResponseEntity<List<String>>  getDistinctManufacturers()                     | always            | ResponseEntity<>(manufacturers, HttpStatus.OK) |

| Class      | Field | Method                                  | Condition | Output |
|------------|-------|-----------------------------------------|-----------|--------|
| CorsConfig |       | addCorsMappings(CorsRegistry registry)  |           |        |

| Class               | Field                                    | Method                | Condition | Output |
|---------------------|------------------------------------------|-----------------------|-----------|--------|
| DatabaseInitializer | ProductRepository productRepository      | initializeProducts()  | always    |        |
