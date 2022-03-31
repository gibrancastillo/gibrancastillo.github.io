try {
  document.getElementById('year').appendChild(document.createTextNode(new Date().getFullYear()));
  //document.getElementById('last_modified').textContent = "Last Updated: " + document.lastModified;
  //document.body.appendChild(document.createElement("center")).innerText = "Last Updated: " + document.lastModified

  const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const date = new Date();
  const dayName = daynames[date.getDay()];
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  
  const fulldate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;
  
  document.querySelector("#current_date").textContent = fulldate;
} catch (e) {
  alert("Error with code or your browser does not support locale");
}

function toggleMenu() {
  document
      .getElementsByClassName("navigation")[0]
      .classList.toggle("responsive");
}


function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}