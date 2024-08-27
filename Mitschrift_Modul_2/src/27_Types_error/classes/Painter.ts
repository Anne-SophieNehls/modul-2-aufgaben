import Artist from "./Artist";

class Painter extends Artist {
  _style: string = "";
  constructor(name: string, yearOfBirth: number, yearOfDeath?: number) {
    super(name, yearOfBirth, yearOfDeath);
  }
}

export default Painter;
