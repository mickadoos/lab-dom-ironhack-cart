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
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
