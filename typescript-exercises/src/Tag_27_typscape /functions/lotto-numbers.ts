export function generateLottoNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1
    if (randomNumber > 49){
        throw new Error ("error, eine böse Zahl wurde gefunden")
    } else{
        console.log(randomNumber)
        return randomNumber
    }
}
