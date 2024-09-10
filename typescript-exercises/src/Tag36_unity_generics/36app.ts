//# Utility-Types-TS-Level-1_1
//& Partial - wichtig/unwichtig
console.log("%c Utility-Types-TS-Level-1_1 ", "background: teal; color: white");

import IBook from "./Ibook";

type PartialBook = Partial<IBook>

const partialBook: PartialBook = {
    author: "J.R.R. Tolkien",
    name: "Lord of the Rings",
  };
  console.log(partialBook);
  
 interface IPartialBook extends Partial<IBook>{}

const partialBook2: IPartialBook = {
    author: "Conelia Funke",
    name: "Tintenherz",
  };
console.log(partialBook2);


//# Utility-Types-TS-Level-1_2
//& omit - entfernen
console.log("%c Utility-Types-TS-Level-1_2 ", "background: teal; color: white");

type BasicBook = Omit<IBook, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "J.k. Rowling",
  name: "Harry Potter und der Orden des Phönix",
  numberOfPages: 1132,
};
console.log(basicBook);

interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription"> {}

const basicBook2: IBasicBook ={
    author: "J.k. Rowling",
    name: "Harry Potter und der gefangene von Askaban",
    numberOfPages: 545,
}
console.log(basicBook2);

//# Utility-Types-TS-Level-1_3
//& pick - anwählen
console.log("%c Utility-Types-TS-Level-1_3 ", "background: teal; color: white");

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "Naruto",
  shortDescription: "Ein Aussenseiter wird Ninja und rettet die Welt, nebenbei wir er auch Hokake",
};
console.log(bookDescription);

interface IBookDescription extends Pick<IBook, "name" | "shortDescription"> {}

const bookDescription2: IBookDescription = {
  name: "Der 100 Jährige, der aus dem Fester stieg und verschwand",
  shortDescription: "Ein altewr man hat kein bock auf langeweile im leben und macht sich auf ins ein Abenteuer",
};
console.log(bookDescription2);

//# Utility-Types-TS-Level-1_4
//& Required - alles ist Pflicht
console.log("%c Utility-Types-TS-Level-1_4 ", "background: teal; color: white");

type RequiredBook = Required<IBook>

const requiredBook: RequiredBook = {
    author: "Stephen king",
    name: "It",
    publishingYear: "1986",
    shortDescription: "horror novel - The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. 'It'",
    numberOfPages: 1138
};
console.log(requiredBook);

interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
    author: "Stephen king",
    name: "Friedhof der Kuscheltiere",
    publishingYear: "1983",
    shortDescription: "die junge Familie Creed ihr neues Zuhause erblickt, sind die Strapazen des Umzugs von Chicago nach Ludlow vergessen. Das weiße Haus ist von einem großen Garten umgeben, hinter dem sich unendliche weite Wälder erstrecken - Gebiet der Micmac-Indianer.",
    numberOfPages: 464
};
console.log(requiredBook2);


//# Utility-Types-TS-Level-1_5
//& Readonly ⇒ schreibgeschützt
console.log("%c Utility-Types-TS-Level-1_5 ", "background: teal; color: white");

type ReadOnlyBook = Readonly<IBook>;

const readonlyBook: ReadOnlyBook = {
  name: "Harry Potter und der Stein der Weisen",
  author: "J.K. Rowling",
  shortDescription: "Du bist ein Zauberer, Harry!",
  publishingYear: "1997",
  numberOfPages: 336,
};
console.log(readonlyBook);

// readonlyBook.name =  "Harry Potter und der Stein der Weißen"

interface IReadOnlyBook extends Readonly<IBook>{}

const readonlyBook2: ReadOnlyBook = {
    name: "Harry Potter und die Kammer des Schreckens",
    author: "J.K. Rowling",
    shortDescription: "Folge den Spinnen, Harry!",
    publishingYear: "1998",
    numberOfPages: 352,
  };

  // readonlyBook2.name =  "Harry Potter und der Basilisk"

  console.log(readonlyBook2);
 
//# Utility-Types-TS-Level-1_6
//& Exclude ⇒ ausscließen
console.log("%c Utility-Types-TS-Level-1_6", "background: teal; color: white");
 
type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "RED" | "BLUE" | "GREEN" | "YELLOW">;

function showColor(color: RealColors) {
  console.log(color);
}

showColor("BLACK");
showColor("WHITE");

//# Utility-Types-TS-Level-1_7
//& Record ⇒ 
console.log("%c Utility-Types-TS-Level-1_7", "background: teal; color: white");
 
interface IDonkey {
    name: string;
    age: number;
    fluffyness: number;
    favoriteFood: string;
  }
  
  enum Donkey {
    Daisy = "Daisy",
    Gus = "Gus",
    Rosie = "Rosie",
    Coco = "Coco",
    Jasper = "Jasper",
  }
  
  const donkeyRecord: Record<Donkey, IDonkey> = {
    [Donkey.Daisy]: {
      name: Donkey.Daisy,
      age: 12,
      fluffyness: 8,
      favoriteFood: "Oats",
    },
    [Donkey.Gus]: {
      name: Donkey.Gus,
      age: 2,
      fluffyness: 3,
      favoriteFood: "Karots",
    },
    [Donkey.Rosie]: {
      name: Donkey.Rosie,
      age: 5,
      fluffyness: 4,
      favoriteFood: "apple",
    },
    [Donkey.Coco]: {
      name: Donkey.Coco,
      age: 8,
      fluffyness: 10,
      favoriteFood: "grass",
    },
    [Donkey.Jasper]: {
      name: Donkey.Jasper,
      age: 16,
      fluffyness: 1,
      favoriteFood: "dead Childrens",
    },
  };
  

