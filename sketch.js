const parent = document.getElementById("etchasketch");
const button = document.getElementById("initialize");
button.addEventListener("click", buttonPress);

function buttonPress() {
    let squares = prompt("How long/tall do you want your grid to be?");
    initializeGrid(squares);
}

function initializeGrid(squares) {

    if (parent.firstChild) {
        myNode.removeChild(parent.firstChild);
    }

    for (let i = 0; i<squares; i++) {
        const el = document.createElement("div");
        el.classList.add("vertcontainer");
        for (let j = 0; j<squares; j++) {
            const horiz = document.createElement("div");
            horiz.classList.add("horiz");
            el.appendChild(horiz);
        }

        document.getElementById("etchasketch").appendChild(el);
        
    }

    const divs = document.getElementsByClassName("horiz");
 
    for (let i = 0; i < divs.length; i++) {
        divs.item(i).addEventListener('mouseover', () => {divs.item(i).style.backgroundColor = 
        'black';})
        divs.item(i).style.height = screen.height/(1.25*squares) + "px"; 
    }

    parent.style.border = "5px solid red";
    
}
