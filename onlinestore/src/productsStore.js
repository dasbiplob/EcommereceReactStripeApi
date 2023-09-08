const productList = [
    {
        id: 1,
        title: "Laptop",
        price: 2000
    },
    {
        id: 2,
        title: "Sunglass",
        price: 500
    },
    {
        id: 3,
        title: "IPhone",
        price: 1500
    },
];


//It's Helper Function to get The products by id from the Product Array
function getProductData(id){
    let productData= productList.find(product => product.id === id);
    if(productData === undefined){
            console.log("Product data does not exist for ID: " + id)
            return productData;
    }

    return productData
}


export {productList, getProductData}
