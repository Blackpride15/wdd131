//Add the current year
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `©️ <span id='currentyear'>${today.getFullYear()}</span>`;

//Add the last modification in HTML
let lastModified = document.lastModified; //define variable
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModified}`; //add in html tag