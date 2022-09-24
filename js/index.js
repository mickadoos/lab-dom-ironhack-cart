// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = Number(price) * Number(quantity);
  product.querySelector('.subtotal span').innerHTML = subtotal;

  return subtotal;
  // const subtotal = product.querySelector('.subtotal span');
  // console.log('price ', price);
  // console.log('price type ', typeof price);
  // console.log('quantity ', quantity);
  // console.log('price quanitty ', typeof quantity);
  
  // subtotal.innerHTML = Number(price) * Number(quantity);
  // console.log('total price', totalPrice);
  // subtotal.innerHTML = totalPrice;  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.querySelectorAll('.product');
  let total = 0;
  products.forEach(element => {
    updateSubtotal(element);
    total += updateSubtotal(element);
  });

  document.querySelector('#total-value span').innerHTML = total;
  // products.forEach(element => {
  //   updateSubtotal(element);
  // });

  // ITERATION 3
  //... your code goes here

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
  calculateAll();
 

}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Creating product...");
  const nameProduct = document.getElementById('new-product').value;
  const numProduct = Number(document.getElementById('num-product').value);
  console.log('name product: ', nameProduct);
  console.log('num product: ', numProduct, typeof numProduct);
  console.log('length ', nameProduct.length);
  // console.log('name product: ', document.getElementById('new-product').value);
  if(nameProduct.length > 0){
    const anyProduct = document.querySelector('.product');
    const tableProduct = document.getElementById('cart');
    console.log('anyproduct: ', anyProduct);
    console.log(tableProduct);
    tableProduct.appendChild(anyProduct);
    
    //look for create object method in docu, createElement + appendChild??
    //set atributes for the new object (tr, "product")
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('.btn-remove');
  console.log('rmv but : ', removeButtons);
  removeButtons.forEach(element => {
    element.addEventListener('click', removeProduct);
  })
  document.getElementById('create').addEventListener('click', createProduct);
});
