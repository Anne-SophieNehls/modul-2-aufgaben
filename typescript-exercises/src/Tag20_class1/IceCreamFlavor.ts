class IceCreamFlavor{
    _name: string
    _price: number
    _isPopular: boolean
    _description?: string 
    _scoops: number = 0;

    constructor (name: string, price: number, isPopular: boolean, description?: string){
        this._name = name
        this._price = price
        this._isPopular = isPopular
        this._description = description
    }

    getTotalPrice():number{
// gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus 
    const totalPrice = this._price * this._scoops;
    console.log(
  `The price for ${this._scoops} scoops of ${
    this._name
  }Ice Cream is ${totalPrice.toFixed(2)} Euro`
);
return totalPrice;
}

printInfo(){
    //→ gibt z. B. Folgendes auf der Konsole aus
    if (this._isPopular = true){
    console.log(`Flavor ${this._name} is a popular Ice Cream and costs ${this._price} Euro.`)
} else {
    console.log(`Flavor ${this._name} is not a very popular Ice Cream and costs ${this._price} Euro.`)
}
}

//! Chat GPT Lösung für kürteren code:
//  printInfo() {
//    console.log(`Flavor ${this.name} is ${this.isPopular ? 'popular' : 'not popular'} and costs ${this.price.toFixed(2)} Euro.`); }

 getLengthOfDescription() {
    // gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist}
    return  this._description?.length ;
}

increaseScoops(){
    this._scoops++
}

}

export default IceCreamFlavor