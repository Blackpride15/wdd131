const products = [
    { id: '1', name: 'Product 1' },
    { id: '2', name: 'Product 2' },
    { id: '3', name: 'Product 3' }
];


function populateProductOptions() {
    const productSelect = document.getElementById('product');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

populateProductOptions();


//Add the current year
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `©️ <span id='currentyear'>${today.getFullYear()}</span>`;

//Add the last modification in HTML
let lastModified = document.lastModified; //define variable
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModified}`; //add in html tag
