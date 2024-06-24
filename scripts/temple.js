document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // // Get the current year
    // document.getElementById('currentyear').textContent = new Date().getFullYear();

    // Get the last modified date of the document
    const lastModifiedSpan = document.getElementById('last-modified');
    if (lastModifiedSpan) {
        const lastModified = new Date(document.lastModified);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        lastModifiedSpan.textContent = lastModified.toLocaleDateString('en-US', options);
    }
    

});
