document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    const lastModifiedSpan = document.getElementById("last-modified");
    lastModifiedSpan.textContent = document.lastModified;
});