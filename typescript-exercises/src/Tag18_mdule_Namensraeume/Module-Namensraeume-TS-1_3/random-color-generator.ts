import {Colors} from "./special-color"

export function randomColorGenerator():Colors {
    console.log(Colors)
    const colorValue = Object.values(Colors) as Colors[] 
    console.log (colorValue)
    const randomIndex = Math.floor(Math.random()*colorValue.length)
    console.log(randomIndex)
    return colorValue[randomIndex]
} 

//if(Math.random()*10 === 0){    console.log(colors.red)}
