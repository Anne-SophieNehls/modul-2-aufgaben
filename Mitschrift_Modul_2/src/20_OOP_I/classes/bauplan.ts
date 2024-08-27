class Bauplan {
    _besitzer?: Besitzer;
    _rooms: Rooms;
    _color: string = "White";
    _tiefGarage: boolean;


constructor( besitzer: Besitzer,rooms: number, /* color: string, */ tiefGrarage: boolean){
    this._besitzer = besitzer
    this._rooms = rooms
    //this._color = color
    this._tiefGarage = tiefGrarage
}

//& METHODEN

renovieren(newColor: string): void {
    this._color = newColor
    console.log(`Die wohnung wurde in ${this._color}gestrichen`)
}

}
class Besitzer{
    _vorName?: string;
    _nachName: string;
    _telefon?: number

    constructor(vorName: string, nachName: string, telefon: number){
        this._vorName = vorName
        this._nachName = nachName
        this._telefon = telefon
    }

    printInfo(): void{
        console.log(`der Name des besitzers ist ${this._vorName} ${this._nachName} und die Telefonnumer lautet ${this._telefon}`)
    }
    //! bei den nummern nie mit der null starten
}

enum RoomTypes{
    Kitchen = "Küche",
    Livingroom = "Wohnzimmer",
    Bedroom = "Schlafzimmer",
    Toilett = "Badezimmer",
    freeRoom = "frei gestalbarer Raum"
}

class Rooms{
    _roomsCount: number
    _roomsTypes: RoomTypes[]

    constructor(roomsCount: number, roomtypes: RoomTypes[]){
        this._roomsCount = roomsCount,
        this._roomsTypes = roomtypes
    }
}

export default Bauplan;