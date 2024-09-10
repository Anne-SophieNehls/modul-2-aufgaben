//$ generics-class -> ist wie ein platzhalter um danach die types/keys zu verändern

class Dog {
    constructor(public name: string, public age: number) {}
    bark(){
        console.log("wuff wuff"); }}

class Product {
    constructor(public id: string, public name: string, public price: number){}}

class DogAministrations{
    private dogs: Dog[]= [];

    addDog(dog: Dog){
        this.dogs.push(dog)}

    getAllDogs(){
        return this.dogs}
}

class ProductAdministrations {
    private rpoducts: Product[] =[];

    addProduct(product: Product){
        this.rpoducts.push(product)}

    getAllProducts(){
        return this.rpoducts}
}

const dog1 = new DogAministrations()
dog1.addDog(new Dog("Schnuffy", 4))

const dog2 = new DogAministrations()
dog2.addDog(new Dog("Nala", 2))

console.log(dog1.getAllDogs())
console.log(dog2.getAllDogs())


const product1 = new ProductAdministrations()
product1.addProduct(new Product("1", "Laptop", 1200))

// hier passiert viel gleicher code,  das kann man zusammen fassen mit:
//! Generics (Platzhalter)
//? ab hier wird mit generischen class Adminstations
//? hier muss man in der spitzen Klammer nach dem Klassennamen das T schreiben (T steht für jeden belibigen Datentyp)

class Adminstation<T> {
    private parameter: T[] = []

    addInstance(para :T){
        this.parameter.push(para)
    }

    getAllInstance() {
        return this.parameter
    }
}
//? beim Anlegen mit einem new muss man in den spitzen Klammer den Datentyp (Klassennamen) angben

const dog2MitGenerics = new Adminstation<Dog>()
dog2MitGenerics.addInstance(new Dog("Snoopy", 3))
console.log(dog2MitGenerics.getAllInstance());

const prductMitGenerics = new Adminstation<Product>()
prductMitGenerics.addInstance(new Product("2", "Kaffee", 5.99))
console.log(prductMitGenerics.getAllInstance());

class Song {
    constructor(public name: string, public length: number ){}
}

const SongMitGenerics = new Adminstation<Song>()
SongMitGenerics.addInstance(new Song("love", 2.55))

//% beispiele ohne klass mit anderen Datentyp

class Box<T> {
    private content: T

    constructor(cont: T){
        this.content = cont }

    getContent(){
        return this.content  } }

const numberInBox = new Box<number>(420)
console.log(numberInBox.getContent());

const stringInBox = new Box<string>("ladida")
console.log(stringInBox.getContent());