document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // // Get the current year
    // document.getElementById('currentyear').textContent = new Date().getFullYear();

    window.onload = function () {
        // Display current date and time
        var footerDateTime = document.getElementById('currentDateTime');
        var now = new Date();
        var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        footerDateTime.textContent = now.toLocaleString('en-US', options);

        // Display last modified date and time
        const lastModifiedSpan = document.getElementById('lastmodified');
        if (lastModifiedSpan) {
            const lastModified = new Date(document.lastModified);
            const lastModifiedOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            lastModifiedSpan.textContent = lastModified.toLocaleDateString('en-US', lastModifiedOptions) + " " + lastModified.toLocaleTimeString('en-US', lastModifiedOptions);
        }
    };

});
