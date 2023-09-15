//Iphone : price_1NqdD9KThwOnnVGSKnsiEHE9
//Laptop: price_1NqdEMKThwOnnVGS4yFA61zM
//SunGlass : price_1NqdFIKThwOnnVGSXeOGUAoR

const productList = [
    {
        id: "price_1NqdEMKThwOnnVGS4yFA61zM",
        title: "Laptop",
        price: 3000
    },
    {
        id: "price_1NqdFIKThwOnnVGSXeOGUAoR",
        title: "Sunglass",
        price: 500
    },
    {
        id: "price_1NqdD9KThwOnnVGSKnsiEHE9",
        title: "IPhone",
        price: 2500
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
