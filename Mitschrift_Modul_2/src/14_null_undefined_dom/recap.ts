enum Colors {
    Yellow = '#FFFF00',
    Orange = '#FFA500',
    Pink = '#FFC0CB',
    Blue = '#0000FF',
    Purple = '#800080',
    Gray = '#808080',
    Black = '#000000',
}

const colorOutput = document.getElementById("color_output")

const ColorsToArray = Object.entries(Colors)
// mit entries kann man aus einem Objecke eine ausgabe als Array erzeugen

if (colorOutput){
    ColorsToArray.forEach(([key, value])=>{
        const buttonElement = document.createElement("button")
        buttonElement.innerHTML =key
        buttonElement.style.background = value
    })
}