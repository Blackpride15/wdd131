//Add the current year

setTimeout(function() { 
    document.getElementById('loaderBody').style.display = "none";  
    document.getElementById('main').style.display="block"
},2000);

const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `©️ <span id='currentyear'>${today.getFullYear()}</span>`;

//Add the last modification in HTML
let lastModified = document.lastModified;
document.querySelector('#lastModified').innerHTML = `Last Modification: ${lastModified}`;


function toggleNav() {
    var nav = document.getElementById("nav");
    var navStyle = window.getComputedStyle(nav);
    if (navStyle.display === "none") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("speech");
    let dots = document.getElementsByClassName("show");
    
  
    if (window.innerWidth > 768) {
       
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        let next;
        let prev;
        if (slideIndex >= slides.length) {
            next = 0;
            prev = 2;
            slideIndex = 1;
        }
        else{
             next=slideIndex;
             prev=slideIndex-1;
        }
        slides[prev].style.display = "inline-block";
        slides[next].style.display = "inline-block";
        for (i = 0; i < dots.length; i++) {
            dots[i].id = dots[i].id=" ";
        }
        dots[prev].id= "active";
    } else {
     
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "inline-block";
    }
    

    for (i = 0; i < dots.length; i++) {
        dots[i].id = dots[i].id="";
    }
    dots[slideIndex - 1].id = "active";
    
    setTimeout(showSlides, 2000); 
}

showSlides(); 

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
}

function clearForm() {
    document.getElementById('name').value = ''; // Clear name input
    document.getElementById('email').value = ''; // Clear email input
    document.getElementById('des').value = ''; // Clear project textarea
}



function showAlertMessage() {

    var alertDiv = document.getElementById('alert');

    
    alertDiv.style.display="block";
    alertDiv.style.opacity = 1; 
    alertDiv.style.transform = "translateX(0) translateY(0)"
    clearForm()
    scrollToTop();
    setTimeout(function() {
        alertDiv.style.display = "none";
       
    }, 4000); 
    
}
