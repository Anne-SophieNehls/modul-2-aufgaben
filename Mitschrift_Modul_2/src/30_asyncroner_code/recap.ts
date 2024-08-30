function formatString(text: string, callback1: (Parameter: string)=> string, callback2: (result: string)=> string,){
    setTimeout(()=>{
        const resultErsteFunc = callback1(text)
        console.log(resultErsteFunc);
        const resultZweiteFunc = callback2(resultErsteFunc)
        console.log(resultZweiteFunc)
    }, 3000)
}

function toUpperCaseRemoveSpace(text: string): string {
    return text.toUpperCase().replace(" ", "");
}

toUpperCaseRemoveSpace("hallo world")

function reverseToLowerCase(text: string): string{
    const result = text.split(""). reverse().join("").toLowerCase()
    return result
    console.log(result)
}