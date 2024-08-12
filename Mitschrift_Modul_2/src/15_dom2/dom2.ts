const elementName = ;

elementName?.addEventListener("keyup", (event)=>{
    console.log(event.key)
    if(event.code){
        console.log(event.code);
    }
})