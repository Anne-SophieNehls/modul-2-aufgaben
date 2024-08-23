class Person {
    _name: string;
    private _birthday: Date;
    _gender: Gender; 

    constructor(name: string, birthday: Date,  gender: Gender ){
        this._name = name,
        this._birthday = birthday,
        this._gender = gender
    }

    get birthday(){
        return this._birthday
    }

    set birthday(value: Date){
        this._birthday = value
    }
}

export enum Gender{
    female = "Female",
    male = "Male",
    diverse = "Diverse"
 }

export default Person
