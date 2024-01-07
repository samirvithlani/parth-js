const product ={

    id: 1,
    name: 'Iphone 15',
    price: 100000,
    description: 'This is a product',
    image: 'https://picsum.photos/200/300',
    capacity: '64GB',
    colors: ["red", "green", "blue"]
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.description);
console.log(product.image);
console.log(product.capacity);
console.log(product.colors);
for(let i=0;i<product.colors.length;i++){
    console.log(product.colors[i]);
}