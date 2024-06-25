document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });


    // Place this code in your scripts/temple.js file

    (function () {
        // Get references to the HTML elements
        const currentYearSpan = document.getElementById('currentyear');
        const lastModifiedSpan = document.getElementById('lastModifiedDate');

        // Update the current year dynamically
        currentYearSpan.textContent = new Date().getFullYear();

        // Function to format the last modified date in a user-friendly way
        function formatDate(date) {
            const options = {
                year: 'numeric',  // Year in numeric format (e.g., 2024)
                month: 'long',   // Month as a full textual representation (e.g., June)
                day: 'numeric'   // Day of the month with padding (e.g., 25)
            };
            return date.toLocaleDateString('en-US', options); // Customize based on locale if needed
        }

        // Get the last modified time of the current HTML document
        const lastModified = document.lastModified;

        // Check if lastModified is available (not supported by all browsers)
        if (lastModified) {
            const formattedDate = formatDate(new Date(lastModified));
            lastModifiedSpan.textContent = formattedDate;
        } else {
            // Provide a fallback message if lastModified is not available
            lastModifiedSpan.textContent = 'Date information unavailable.';
        }
    })();

 

});
