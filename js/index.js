// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceSpan = product.querySelector('.price span');
  const price = priceSpan.innerHTML;

  const quantityInput = product.querySelector('.quantity input');
  const quantity = quantityInput.value;

  const subtotal = Number(quantity) * Number(price);
  const subtotalSpan = product.querySelector('.subtotal span');
  subtotalSpan.innerHTML = subtotal.toFixed(2);

  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');

  // ITERATION 3

  let total = 0;

  for (let product of allProducts) {
    const subtotal = updateSubtotal(product);

    total += subtotal;
  }

  const totalTextSpan = document.querySelector('#total-value span');
  totalTextSpan.innerHTML = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);

  const parent = document.querySelector('#cart tbody');
  parent.removeChild(target.parentNode.parentElement);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const items = document.querySelectorAll('.create-product td input');
  console.log(items);
  const name = items[0].value;
  const price = items[1].value;
  const trElement = document.createElement('tr');
  trElement.className = 'product';
  const content = `<td class='name'>
<span>¢</span></td>`;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const items = documents.getElementsByClassName('btn btn-remove');
});
