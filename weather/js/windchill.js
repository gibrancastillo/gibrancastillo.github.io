document.addEventListener("DOMContentLoaded", function() {
    let temperature = document.querySelector("#temperature").innerText;
    let speed = document.querySelector("#speed").innerText;
    let chill = document.querySelector("#chill");
    chill.innerHTML = computeWindChill(temperature, speed);
});

function computeWindChill(temperature, speed) {
    let calculated_windchild = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    let floorWindChild = Math.floor(calculated_windchild);
    floorWindChild = (floorWindChild > temperature) ? temperature : floorWindChild;
    console.log(floorWindChild);
    return floorWindChild;
}