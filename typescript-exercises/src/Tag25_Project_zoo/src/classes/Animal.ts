import Continent from "../enmus/Continent";

class Animal {
    _emoji: string;
    _type: string;
    _name: string;
    _yearOfBirth: number;
    _continent: Continent;
    _specialNeeds: string;
    _enclosureId: number;


    constructor(emoji: string, type: string, name: string, yearOfBirth: number, continent: Continent, specialNeeds: string, enclosureId: number){
        this._emoji = emoji,
        this._type = type;
        this._name = name;
        this._yearOfBirth = yearOfBirth;
        this._continent= continent;
        this._specialNeeds = specialNeeds;
        this._enclosureId = enclosureId;
    }
}

export default Animal