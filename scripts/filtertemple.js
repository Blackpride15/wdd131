//Add the current year
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `©️ <span id='currentyear'>${today.getFullYear()}</span>`;

//Add the last modification in HTML
let lastModified = document.lastModified; //define variable
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModified}`; //add in html tag

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const h1 = document.querySelector('h1') //added this for h1 

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.

//Hamburguer - Menu 
// Store the selected elements that we are going to use. 
const hamButton = document.querySelector('#menu');
const menu = document.querySelector('.navigation');

hamButton.addEventListener('click', function () {
    menu.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Greater Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-758797-wallpaper.jpg"
    },
    {
        templeName: "Asunción Paraguay",
        location: "Asunción, Alto Paraguay, Paraguay",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-mormon-temple-911889-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-763229.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 37600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
    },
    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 21400,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong_kong_china_temple_sealing_room.jpeg"
    }
];

// function createTempleCards(temples) {
//     const container = document.getElementById('temple-cards-container');
//     container.innerHTML = ''; 

//     temples.forEach(temple => {
//         const card = document.createElement('div');
//         card.className = 'temple-card';

//         card.innerHTML = `
//       <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
//       <h3>${temple.templeName}</h3>
//       <p>Location: ${temple.location}</p>
//       <p>Dedicated: ${temple.dedicated}</p>
//       <p>Area: ${temple.area} sq ft</p>
//     `;

//         container.appendChild(card);
//     });
// }

// createTempleCards(temples);


// function filterTemples(criteria) {
//     let filteredTemples;

//     switch (criteria) {
//         case 'old':
//             filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 3000);
//             break;
//         case 'new':
//             filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 5000);
//             break;
//         case 'large':
//             filteredTemples = temples.filter(temple => temple.area > 90000);
//             break;
//         case 'small':
//             filteredTemples = temples.filter(temple => temple.area < 10000);
//             break;
//         default:
//             filteredTemples = temples;
//     }

//     createTempleCards(filteredTemples);
// }

// document.getElementById('filter-old').addEventListener('click', () => filterTemples('old'));
// document.getElementById('filter-new').addEventListener('click', () => filterTemples('new'));
// document.getElementById('filter-large').addEventListener('click', () => filterTemples('large'));
// document.getElementById('filter-small').addEventListener('click', () => filterTemples('small'));
// document.getElementById('filter-home').addEventListener('click', () => filterTemples('home'));

createTempleCard(temples);

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    createTempleCard(temples);
    document.querySelector("h2").innerHTML = "Home";
});

const oldTemples = document.querySelector("#old");
oldTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date("1900")));
    document.querySelector("h2").innerHTML = "Old temples";
});

const newTemples = document.querySelector("#new");
newTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) > new Date("2000")));
    document.querySelector("h2").innerHTML = "New temples";
});

const largeTemples = document.querySelector("#large");
largeTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area) > ("90000")));
    document.querySelector("h2").innerHTML = "Large temples";
});

const smallTemples = document.querySelector("#small");
smallTemples.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => (temple.area) < ("10000")));
    document.querySelector("h2").innerHTML = "Small temples";
});

function createTempleCard(filteredTemples) {
    document.querySelector(".card").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add(`card-${1}`);
        let img = document.createElement("img");
        let templeName = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");

        templeName.textContent = temple.templeName;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.style.aspectRatio = "5 / 3";
        img.setAttribute("loading", "lazy");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;

        card.appendChild(templeName);
        card.appendChild(img);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);

        document.querySelector(".card").appendChild(card);
    });
}



