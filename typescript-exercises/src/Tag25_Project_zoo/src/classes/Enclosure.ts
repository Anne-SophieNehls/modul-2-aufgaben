import EnclosurId from "../enmus/EnclosureId"

class Enclosure{
    constructor(public id: EnclosurId, public name: string, public bildInYear: number){
        this.id = id
        this.name = name
        this.bildInYear = bildInYear
    }
}