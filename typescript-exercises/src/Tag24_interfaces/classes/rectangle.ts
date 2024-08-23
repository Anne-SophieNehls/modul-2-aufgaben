import IShape from "../contracts/IShape";

class Rectangle implements IShape{
    name: string;
    color: string;
    isround: boolean;
    width: number;
    height: number;


    constructor(name: string, color: string, width: number, height: number, isround: boolean){
        this.name = name;
        this.color = color;
        this.width = width;
        this.height = height;
        this.isround = isround
    }

    draw(){
        console.log("drawing rectangle");
    }
}

export default Rectangle