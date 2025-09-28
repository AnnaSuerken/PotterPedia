async function init(){
    await fetchData();

    renderHighlightBubbles(characterArray);

    
    console.log(characterArray)

}



async function fetchData(){
    const response = await fetch(characterUrl);
    const data = await response.json();

    let characterData = {
        name: data.attributes.name,
        alias: data.attributes.alias_names,
        born: data.attributes.born,
        hair_color: data.attributes.hair_color,
        bloodstatus: data.attributes.blood_status,
        animagus: data.attributes.animagus,
        house: data.attributes.house,
        patronus: data.attributes.patronus,
        wand: data.attributes.wands,
        marital_status: data.attributes.marital_status,
        image: data.attributes.image,
        job: data.attributes.jobs,  
    };

    characterArray.push(characterData);

    
}

function renderHighlightBubbles(array){
    let contentRef = document.getElementById('content-section');
    contentRef.innerHTML = "";

    for (let index = 0; index < array.length; index++) {
        contentRef.innerHTML += getHighlightBubble();
        
    }
}