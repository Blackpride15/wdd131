//Add the current year
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `©️ <span id='currentyear'>${today.getFullYear()}</span>`;

//Add the last modification in HTML
let lastModified = document.lastModified; //define variable
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModified}`; //add in html tag

const products = [
    {
        id: "",
        name: "Choose a Product &#9662;",
        averagerating: 0
    },
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function createProducts(productlist) {
    document.querySelector('#product').innerHTML = ``;
    productlist.forEach(product => {
        let options = document.createElement("option");

        options.setAttribute("value", product.id);
        if (product.id == "") {
            options.setAttribute("disabled", "disabled")
            options.setAttribute("selected", "selected")

        }

        options.innerHTML = product.name;
        document.querySelector('#product').appendChild(options);
    });
}
createProducts(products);

const submitbt = document.querySelector('.submitbt');

let actualCount = localStorage.getItem("submits");

document.addEventListener('DOMContentLoaded', () => {
    submitbt.addEventListener('submit', (event) => {
        event.preventDefault();
        actualCount++;
        localStorage.setItem("submits", actualCount);
    })
});