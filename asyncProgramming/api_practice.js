const apiUrl = "https://rickandmortyapi.com/api/location/";

const retrieveLocation = async (id) => {
  const response = await fetch(apiUrl);
  const json = await response.json();
  console.log(json.results[0].name);
  return json.results[0].name;
};

document.getElementById("getLocation").addEventListener("click", () => {
  retrieveLocation(document.getElementById("locationId").value).then((name) => {
    document.getElementById("locationName").innerHTML = name;
  });
});
