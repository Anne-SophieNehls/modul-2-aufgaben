class Animals{
    _species: string;
    private _age: number;
    _color: string;


    constructor(species: string, age: number,  color: string){
        this._species = species,
        this._age = age
        this._color = color
    }

    get age(){
        return this._age
    }

    set age(value: number){
        this._age =value
    }

}

export default Animals
