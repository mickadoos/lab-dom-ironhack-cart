// Your code here
const buttonInc = document.getElementById('counter-increment');
let counter = Number(document.getElementById('counter-value').innerHTML);

if(counter < 10) {
  buttonInc.addEventListener('click', () => {
  counter++;
  document.getElementById('counter-value').innerHTML = counter;
  console.log('counter ', counter);
  console.log('counter type ', typeof counter);
});

}