var lastModified = document.lastModified;

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
document.getElementById('last_modified').appendChild(document.createElement("center")).innerText = "Last Updated: " + lastModified