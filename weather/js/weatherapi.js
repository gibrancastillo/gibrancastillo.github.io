//OpenWeatherMap
// API Key (AppId) - 3269efc82e03c378edf3680c194b11a1

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3269efc82e03c378edf3680c194b11a1";

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    document.querySelector("#current-temp").textContent = jsonObject.main.temp;

	const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
	const desc = jsonObject.weather[0].description;

	document.querySelector("#imagesrc").textContent = imagesrc;
	document.querySelector("#icon").setAttribute("src", imagesrc);
	document.querySelector("#icon").setAttribute("alt", desc);
  });