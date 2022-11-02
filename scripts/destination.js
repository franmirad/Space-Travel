/*//----------------------------------------// DESTINATION-DATA //----------------------------------------//*/
fetch('starter-code/data.json')
  .then(destination => destination.json())
  .then(data => {
    document.querySelector("#destination-image").src = data.destinations[0].images.png;
    document.querySelector("#name").innerHTML = data.destinations[0].name;
    document.querySelector("#description").innerHTML = data.destinations[0].description;
    document.querySelector("#distance").innerHTML = data.destinations[0].distance;
    document.querySelector("#travel").innerHTML = data.destinations[0].travel;
  })

var moon = document.getElementById("destination1");
document.getElementById("destination1").onclick = function () {
  fetch('starter-code/data.json')
    .then(destination => destination.json())
    .then(data => {
      document.querySelector("#destination-image").src = data.destinations[0].images.png;
      document.querySelector("#name").innerHTML = data.destinations[0].name;
      document.querySelector("#description").innerHTML = data.destinations[0].description;
      document.querySelector("#distance").innerHTML = data.destinations[0].distance;
      document.querySelector("#travel").innerHTML = data.destinations[0].travel;
    })
}

var mars = document.querySelector("#destination2");
document.querySelector("#destination2").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#destination-image").src = data.destinations[1].images.png;
      document.querySelector("#name").innerHTML = data.destinations[1].name;
      document.querySelector("#description").innerHTML = data.destinations[1].description;
      document.querySelector("#distance").innerHTML = data.destinations[1].distance;
      document.querySelector("#travel").innerHTML = data.destinations[1].travel;
    })
}

var europa = document.querySelector("#destination3");
document.querySelector("#destination3").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#destination-image").src = data.destinations[2].images.png;
      document.querySelector("#name").innerHTML = data.destinations[2].name;
      document.querySelector("#description").innerHTML = data.destinations[2].description;
      document.querySelector("#distance").innerHTML = data.destinations[2].distance;
      document.querySelector("#travel").innerHTML = data.destinations[2].travel;
    })
}

var titan = document.querySelector("#destination3");
document.querySelector("#destination4").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#destination-image").src = data.destinations[3].images.png;
      document.querySelector("#name").innerHTML = data.destinations[3].name;
      document.querySelector("#description").innerHTML = data.destinations[3].description;
      document.querySelector("#distance").innerHTML = data.destinations[3].distance;
      document.querySelector("#travel").innerHTML = data.destinations[3].travel;
    })
}
