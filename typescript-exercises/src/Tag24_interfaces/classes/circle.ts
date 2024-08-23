import IShape from "../contracts/IShape";

class Circle implements IShape{
    name: string;
    color: string;
    radius: number;
    isround: boolean;

    constructor (name: string, color: string, radius: number, isround: boolean){
        this.name = name;
        this.color = color;
        this.radius = radius;
        this.isround = isround;
    }
    draw(){
        console.log("Drawing Circle");
    }
}

export default Circle