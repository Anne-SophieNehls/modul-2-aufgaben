export function greetUser (){
    try {
        const username = window.prompt("Bitte Trage deinen Nutzernamen ein");
        if (!username) {
          throw  window.alert("Username murr eingetragen werden!")
        }
        console.log(`Moin ${username}!`);
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    console.log("Hello, dear visitor! Welcome!");
  }   
}