//OpenWeatherMap: API Key (AppId) - 3269efc82e03c378edf3680c194b11a1
const weatherApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3269efc82e03c378edf3680c194b11a1";
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3269efc82e03c378edf3680c194b11a1";

fetch(weatherApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
	
	if(document.querySelector("#currently") !== null) {
		document.querySelector("#currently").textContent = jsonObject.weather[0].main;
		document.querySelector("#temperature").textContent = jsonObject.main.temp;
		document.querySelector("#humidity").textContent = jsonObject.main.humidity;
		document.querySelector("#speed").textContent = jsonObject.wind.speed;
	}
	
	if(document.querySelector("#imagesrc") !== null) {
		const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
		const desc = jsonObject.weather[0].description;
		document.querySelector("#imagesrc").textContent = imagesrc;
		document.querySelector("#icon").setAttribute("src", imagesrc);
		document.querySelector("#icon").setAttribute("alt", desc);
	}
  });

fetch(forecastApiURL)
  .then(function (response) {
	return response.json();
  })
  .then(function (jsonObject) {
	// console.table(jsonObject); // temporary checking for valid response and data parsing
	const forecasts = jsonObject["list"].filter((forecast) => {
		if(forecast.dt_txt.includes(" 18:00:00")) {
			return forecast;
		}
	});

	const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	for (let i = 0; i < forecasts.length; i++) {
		// Create card (div element)
		let card = document.createElement("div");
		card.setAttribute("class", "flex-col");

		// Forecast Day
		let spanDay = document.createElement("span");
		spanDay.setAttribute("class", "col-head");
		const d = new Date(forecasts[i].dt_txt);
		spanDay.textContent = weekday[d.getDay()];
		card.appendChild(spanDay)
		
		// Image
		let image = document.createElement("img");
		let imagesrc = "https://openweathermap.org/img/w/" + forecasts[i].weather[0].icon + ".png";
		let desc = forecasts[i].weather[0].description;
		image.setAttribute("class", "image-day");
		image.setAttribute("src", imagesrc);
		image.setAttribute("alt", desc);
		card.appendChild(image);

		// Forecast Current Temperature
		let spanTemp = document.createElement("span");
		spanTemp.setAttribute("class", "data");
		let floatTemp = parseFloat(forecasts[i].main.temp);
		let roundTemp = Math.round(floatTemp);
		spanTemp.textContent = roundTemp + "°F";
		card.appendChild(spanTemp);

		// Add card (div element) to class "flex-div" div element
		document.querySelector("div.flex-div").appendChild(card);
	}
  });
