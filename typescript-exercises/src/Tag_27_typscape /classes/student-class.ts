import IStudent from "../interfaces/student";

class Student implements IStudent{
        name: string;
        age: number;
        grade: number;
    
    constructor(name: string, age: number, grade: number){
    this.name = name
    this.age = age
    this.grade = grade
}
}

export default Student

