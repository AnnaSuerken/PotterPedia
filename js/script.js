async function init() {
  await fetchData(characterUrl);

  renderHighlightBubbles(characterArray);

  console.log(characterArray);
}

let characterUrl = "https://potterhead-api.vercel.app/api/characters";

async function fetchData(characterUrl) {
  const response = await fetch(characterUrl);
  const data = await response.json();


  let characterData = {
    name: data[0].name,
    alias: data[0].alternate_names,
    born: data[0].dateOfBirth,
    hair_color: data[0].hairColour,
    ancestry: data[0].ancestry,
    house: data[0].house,
    patronus: data[0].patronus,
    image: data[0].image,
  };

  characterArray.push(characterData);
}

function renderHighlightBubbles(array) {
  let contentRef = document.getElementById("content-section");
  contentRef.innerHTML = "";

  for (let index = 0; index < array.length; index++) {
    contentRef.innerHTML += getHighlightBubble();
  }
}
