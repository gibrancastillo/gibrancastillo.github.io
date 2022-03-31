const townApiUrl = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townApiUrl)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  // console.table(jsonObject);
  const town = jsonObject["towns"].filter(town => town.name === "Preston");
  const events = town[0].events;
  
  // Create card (div element)
  let card = document.createElement("section");

  // Horizontal rule or a thematic break
  let hr = document.createElement("hr");
  card.appendChild(hr);

  // Upcoming Events heading
  let h2 = document.createElement("h2");
  h2.textContent = "Upcoming Events: "
  card.appendChild(h2);

  for (let i = 0; i < events.length; i++) {
    // Add town events heading
    let h4 = document.createElement("h4");
    h4.textContent = events[i];
    card.appendChild(h4);
  }

  document.querySelector("div.town-events").appendChild(card);
});