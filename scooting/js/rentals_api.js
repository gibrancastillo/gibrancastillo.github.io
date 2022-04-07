const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const rental = document.querySelector("#rental");

const rentalsApiUrl = "../assets/data/data.json";
const rentalsApiMockUrl = "https://run.mocky.io/v3/c7c88af0-3856-4253-aa7d-3a5c7f795e1c";

fetch(rentalsApiMockUrl)
  .then((response) => response.json())
  .then((jsonObject) => {
      console.table(jsonObject);
      const cards = jsonObject["rentals"];
      cards.forEach(displayCards);
  });

list.addEventListener("click", (event) => {
  rental.classList.remove("rental-grid")
  rental.classList.add("rental-list")
});

grid.addEventListener("click", (event) => {
  rental.classList.remove("rental-list")
  rental.classList.add("rental-grid")
});


function displayCards(card) {
  // Create elements to add to the document
  let card_section = document.createElement('section');
  let h2 = document.createElement('h2');
  let p = document.createElement('p');
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');
  let p4 = document.createElement('p');
  let img = document.createElement('img');
  let newDiv = document.createElement('div');
  newDiv.className = "logo-company";

  h2.textContent = `${card.rental_type}`
  p.innerHTML = `<span style="font-weight:bold;">Rental Location: </span> ${card.rental_location}`;
  p1.innerHTML = `${card.address}`;
  p2.innerHTML = `${card.phone_number}`;
  p3.innerHTML = `<span style="font-weight:bold;">Reservation: </span> ${card.reservation}`;
  p4.innerHTML = `<span style="font-weight:bold;">Walk-In: </span> ${card.walk_in}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  img.setAttribute('src', card.image);
  img.setAttribute('alt', card.rental_type);
  img.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  newDiv.appendChild(img)
  card_section.appendChild(newDiv);
  card_section.appendChild(h2);
  card_section.appendChild(p);
  card_section.appendChild(p1);
  card_section.appendChild(p2);
  card_section.appendChild(p3);
  card_section.appendChild(p4);


  // Add/append the existing HTML div with the cards class with the section(card)
  rental.appendChild(card_section);

}

