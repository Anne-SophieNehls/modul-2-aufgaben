export class user {
    _username: string = "";
    _email: string = "";
    _passwort: string = ""

    get userName(){
        return this._username
    }

    set userName(value:string){
        if(value.length >= 6 && value.length <=25){
            this.userName = value
        } else{
            console.log("Username must be between 6 and 25 Characters long")
        } 
    }

    get email(){
        return this._email
    }

    set email(value:string){
        if (value.includes("@") && value.includes(".")){
            this._email = value
        } else {
            console.log("Email Adress must contain @ and  .")
        }
    }

    get password(){
        return this._passwort
    }

    set passwort (value:string){
        if (value.length >= 8) {
            this._passwort = value
        } else{
            console.log ("Password must be at lest 9 characters long")
        }
    }


}