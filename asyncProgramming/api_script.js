const baseUrl = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("ul");

searchForm.addEventListener("submit", fetchSpace);

function fetchSpace(e) {
  e.preventDefault();
  fetch(baseUrl)
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      console.log(json);
      displayRockets(json);
    });
}

function displayRockets(data) {
  console.log("Inside displayRockets:", data);
  data.forEach((rocket) => {
    let listItem = document.createElement("li");
    listItem.innerText = rocket.name;
    spaceShips.appendChild(listItem);
  });
}
