/*//----------------------------------------// TECHNOLOGY-DATA //----------------------------------------//*/
fetch('starter-code/data.json')
  .then(destination => destination.json())
  .then(data => {
    document.querySelector("#technology-image").src = data.technology[0].images.portrait;
    document.querySelector("#technology-title").innerHTML = data.technology[0].name;
    document.querySelector("#technology-description").innerHTML = data.technology[0].description;
  })

var launchVehicle = document.getElementById("technology1");
document.getElementById("technology1").onclick = function () {
  fetch('starter-code/data.json')
    .then(destination => destination.json())
    .then(data => {
      document.querySelector("#technology-image").src = data.technology[0].images.portrait;
      document.querySelector("#technology-title").innerHTML = data.technology[0].name;
      document.querySelector("#technology-description").innerHTML = data.technology[0].description;
    })
}

var spaceport = document.getElementById("technology2");
document.getElementById("technology2").onclick = function () {
  fetch('starter-code/data.json')
    .then(destination => destination.json())
    .then(data => {
      document.querySelector("#technology-image").src = data.technology[1].images.portrait;
      document.querySelector("#technology-title").innerHTML = data.technology[1].name;
      document.querySelector("#technology-description").innerHTML = data.technology[1].description;
    })
}

var spaceCapsule = document.getElementById("technology3");
document.getElementById("technology3").onclick = function () {
  fetch('starter-code/data.json')
    .then(destination => destination.json())
    .then(data => {
      document.querySelector("#technology-image").src = data.technology[2].images.portrait;
      document.querySelector("#technology-title").innerHTML = data.technology[2].name;
      document.querySelector("#technology-description").innerHTML = data.technology[2].description;
    })
}