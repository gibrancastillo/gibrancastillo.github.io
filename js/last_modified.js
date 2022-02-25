try {
  document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));
  document.getElementById('last_modified').textContent = "Last Updated: " + document.lastModified;
} catch (e) {
  alert("Error with code or your browser does not support locale");
}