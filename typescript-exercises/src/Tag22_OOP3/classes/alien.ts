class Alien{
    _name :string = "";
    _planet: string = "";
    _galaxy: string = "";
    private _color: string = "";

    constructor(name: string, planet: string, galaxy: string){
        this._name = name,
        this._galaxy = galaxy,
        this._planet = planet
    }

    get color(){
        return this._color
    }
}

export default Alien