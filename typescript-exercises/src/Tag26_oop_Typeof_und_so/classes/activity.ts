class Activity{
    constructor( public name:string, public difficulty :number /* von 1 - 6) */){
       this.name = name
        this.difficulty = difficulty
    }
    get difficulty(): number {
        return this.difficulty;
}