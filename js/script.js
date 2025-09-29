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
    name: data[index].name,
    alias: data[index].alternate_names,
    born: data[index].dateOfBirth,
    hair_color: data[index].hairColour,
    ancestry: data[index].ancestry,
    house: data[index].house,
    patronus: data[index].patronus,
    image: data[index].image,
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
