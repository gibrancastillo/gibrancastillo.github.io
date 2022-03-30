const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'].filter((town) => {
        if(town.name === "Soda Springs" || town.name === "Fish Haven" || town.name === "Preston") {
            return town;
        }
    });

    for (let i = 0; i < towns.length; i++) {
      //<a href=""><section>...</section></a>
      let anchored = document.createElement("a");
      if(towns[i].name === "Soda Springs")
        anchored.setAttribute("href", "soda-springs.html");
      else if(towns[i].name === "Fish Haven")
        anchored.setAttribute("href", "fish-haven.html");
      else if(towns[i].name === "Preston")
        anchored.setAttribute("href", "preston.html");

      // Create card (section element)
      let card = document.createElement('section');

      // Titles - Town Name
      let h2 = document.createElement('h2');
      h2.textContent = towns[i].name;
      card.appendChild(h2);

      // Town Motto
      let h3Motto = document.createElement("h3");
      h3Motto.textContent = towns[i].motto;
      card.appendChild(h3Motto);

      // Year Founded
      let h3YearFounded = document.createElement("h3");
      h3YearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
      card.appendChild(h3YearFounded);

      // Current Population
      let h3Population = document.createElement("h3");
      h3Population.textContent = "Population: " + towns[i].currentPopulation;
      card.appendChild(h3Population);

      // Annual Rain Fall
      let h3RailFall = document.createElement("h3");
      h3RailFall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      card.appendChild(h3RailFall);
      
      // Image
      let image = document.createElement("img");
      image.setAttribute("src", "./assets/home/city" + (i + 1) + ".jpeg")
      image.setAttribute("alt", towns[i].name + " - " + (i + 1));
      card.appendChild(image);

      // Add card (section element) to <a> element
      anchored.appendChild(card)

      // Add anchored (<a> element) to class "cards" div element
      document.querySelector("div.cards").appendChild(anchored);
    }
  });