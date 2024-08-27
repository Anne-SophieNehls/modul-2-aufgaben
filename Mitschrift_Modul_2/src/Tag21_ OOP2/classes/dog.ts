import Owner from "./owner";


// das schlüsselwort private sorgt dafür, dass einzelne Eigenschaft in einer class nicht mehr seperat ausgegheben werden könen 
class Dog{
    private _name: string = "";
    private _age: number;
    _owner: Owner;
    _breed: string | undefined = "";
    _favoriteFood?: string = "";
    _numberOfMeal: number = 0;

    constructor (name: string, age: number, owner: Owner){
        this._name = name,
        this._age = age,
        this._owner = owner
    }

    //! Getter und setter
    //? get => mit get kann man aus den classes die Eigenschaftswerte erausholen.     der name der eigenschaft wird hierfür in geschweiften Klammern geschrieben, hier brauchen wir wieder ein return

    get age(){
        console.log("getter ist called")
        return this._age
    }

    //? set => ist für änderungen an einem Eigenschaftswert zustendig. Aufbau: set - name der Eigenschaft - runde Klammern bekommen gesat was passiertt - danach geschweifte klammern bekommen den neuen Wert zugewiesen

    set age(value: number){
        console.log("setter is called")
if (value < 0 || value > 40){
    console.log("Invalid Valie for dog age")
} else {
    this._age = value
}  }


//! METHODEN
//? man kann die methoden selbst bauen, diese sind nicht vorgegeben, man deklariert sie selbst, (wie eine funktion)

sleep(): void {
    console.log(`${this._name} is sleeping...`)
}

bark(sound: string): void{
    console.log(`${this._name} says ${sound}`)
}

isHungry():string{
    if(this._numberOfMeal < 4){
        return `${this._name} is Hungry`
    } else {
        return `${this._name} is satt`
    }
}

eat(): void{
    this._numberOfMeal ++
    console.log(`Current MEal of numbers ist now ${this._numberOfMeal}`);
    if (this._numberOfMeal >= 4){
        this.sleep()
     // man kann nicht nur auf Eigenschaften zugreifen sondern auch auf die schon bestehenden methoden und somit eine Methode mit einer weiteren verbinden
    }
}

}

export default Dog