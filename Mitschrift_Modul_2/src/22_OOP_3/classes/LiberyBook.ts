class LiberyBook {
    private _id: string = "";
    private _currentOwner: string = "";
    _titel: string = "";
    _autor: string = "";
    private _isBorrowed: boolean =false;


    get id(){
        return this._id
    }

    get currentOwner(){
        return this._currentOwner
    }

    constructor(titel: string, autor: string){
        this._titel = titel
        this._autor = autor
        this._id = this.generateId()
    }

    private generateId(): string{
        return `${this._autor.replace(" ", "")}-${Date.now()}`
    }

    public borrowBook(currentOwner: string):void{
        if(!this._isBorrowed){
            this._isBorrowed = true
            this._currentOwner =currentOwner
        } else {
            const headline = document.createElement("h2") as HTMLHeadElement
            headline.innerText = `The Book ${this._titel} is already borrowed`
            document.body.appendChild(headline)
            console.error(`The Book ${this._titel} is already borrowed`)
        }
    }

    public bringBookBack():void{
        if(this._isBorrowed){
            this._isBorrowed = false
            this._currentOwner =""
        } else {
            console.error(`The Book ${this._titel} was not borrowed`)
        }
    }
    
}


export default LiberyBook
