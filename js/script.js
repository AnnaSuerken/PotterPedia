async function init(){
    await fetchData(characterUrl);

    renderHighlightBubbles(characterArray);

    
    console.log(characterArray)

}

let characterUrl = "https://potterhead-api.vercel.app/api/characters";

async function fetchData(characterUrl){
    const response = await fetch(characterUrl);
    const data = await response.json();

    let characterData = {
        name: data.name,
        alias: data.alternate_names,
        born: data.dateOfBirth,
        hair_color: data.hairColour,
        ancestry: data.ancestry,
        house: data.house,
        patronus: data.patronus,
        wand_core: data.wand.core,
        wand: data.wand.wood,
        image: data.image,  
    };

    characterArray.push(characterData)
   

    
}

function renderHighlightBubbles(array){
    let contentRef = document.getElementById('content-section');
    contentRef.innerHTML = "";

    for (let index = 0; index < array.length; index++) {
        contentRef.innerHTML += getHighlightBubble();
        
    }
}