document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;

    const temperature = 10;
    const windSpeed = 5; 

    function calculateWindChill(temp, speed) {
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16));
    }

    if (temperature <= 10 && windSpeed >= 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('windChill').textContent = `${windChill} °C`;
    } else {
        document.getElementById('windChill').textContent = 'N/A';
    }
});