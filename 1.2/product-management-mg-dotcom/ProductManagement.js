function ProductManagement() {
  let products = [
    {
    id: 1,
    name: 'Laptop',
    category: 'Electronics',
    price: 88.99,
    },
     {
     id: 2,
     name: 'Hair Drying',
     category: 'Electronics',
     price: 51,  
   },
     {
     id: 3,
     name: 'Air Condition',
     category: 'Electronics',
     price: 58.99
     }
  ]

  function getAllProducts(){
    return products
  }

  function addProduct(product){
    const count = products.push(product)
    return "Add Product Success !! now we have " + count + " product"
  }

  function removeAll(){
    const clear = products.splice(products.length)
    return clear
  }

  function searchByName(name){
    const matchName = products.filter((pd) => pd.name.toLowerCase() === name.toLowerCase())
    return matchName
  }

  function searchByPriceRange(minPrice, maxPrice){
   const priceRange = products.filter((pd) => minPrice < pd.price && pd.price< maxPrice)
   return priceRange
  } 

  return {
    getAllProducts,
    addProduct,
    removeAll,
    searchByName,
    searchByPriceRange
  }

}

module.exports = ProductManagement
const productCatalog = ProductManagement()


  console.log(productCatalog.searchByPriceRange(50,52))
