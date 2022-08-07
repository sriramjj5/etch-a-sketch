for (let i = 0; i<16; i++) {
    const el = document.createElement("div");
    el.classList.add("vertcontainer");
    for (let j = 0; j<16; j++) {
        const horiz = document.createElement("div");
        horiz.classList.add("horiz");
        el.appendChild(horiz);
    }

    document.getElementById("body").appendChild(el);
    
}

const divs = document.getElementsByClassName("horiz");

for (let i = 0; i < divs.length; i++) {
    divs.item(i).addEventListener('mouseover', () => {divs.item(i).style.backgroundColor = 
    'black';})
}


// divs.forEach(addHoverEvent);

// function addHoverEvent(div) {
//     div.addEventListener('mouseover', handleMouseOver(div));
// }

// function handleMouseOver(div) {
//     div.style.backgroundColor = 'black';
// }