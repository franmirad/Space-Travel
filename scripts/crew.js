/*//----------------------------------------// CREW-DATA //----------------------------------------//*/
fetch('starter-code/data.json')
  .then(crew => crew.json())
  .then(data => {
    console.log(data.crew)
    document.querySelector("#crew-image").src = data.crew[0].images.png;
    document.querySelector("#crew-rank").innerHTML = data.crew[0].role;
    document.querySelector("#crew-name").innerHTML = data.crew[0].name;
    document.querySelector("#crew-description").innerHTML = data.crew[0].bio;
  })

var commander = document.querySelector("#crew1");
document.querySelector("#crew1").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#crew-image").src = data.crew[0].images.png;
      document.querySelector("#crew-rank").innerHTML = data.crew[0].role;
      document.querySelector("#crew-name").innerHTML = data.crew[0].name;
      document.querySelector("#crew-description").innerHTML = data.crew[0].bio;
    })
}

var missionSpecialist = document.querySelector("#crew2");
document.querySelector("#crew2").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#crew-image").src = data.crew[1].images.png;
      document.querySelector("#crew-rank").innerHTML = data.crew[1].role;
      document.querySelector("#crew-name").innerHTML = data.crew[1].name;
      document.querySelector("#crew-description").innerHTML = data.crew[1].bio;
    })
}

var pilot = document.querySelector("#crew3");
document.querySelector("#crew3").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#crew-image").src = data.crew[2].images.png;
      document.querySelector("#crew-rank").innerHTML = data.crew[2].role;
      document.querySelector("#crew-name").innerHTML = data.crew[2].name;
      document.querySelector("#crew-description").innerHTML = data.crew[2].bio;
    })
}

var flightEngineer = document.querySelector("#crew4");
document.querySelector("#crew4").onclick = function () {
  fetch('starter-code/data.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#crew-image").src = data.crew[3].images.png;
      document.querySelector("#crew-rank").innerHTML = data.crew[3].role;
      document.querySelector("#crew-name").innerHTML = data.crew[3].name;
      document.querySelector("#crew-description").innerHTML = data.crew[3].bio;
    })
}

