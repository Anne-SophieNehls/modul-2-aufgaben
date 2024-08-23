import IEmployee from "../contracts/employee";
import Subordinate from "./subordinate";

class Manager implements IEmployee{
    name: string;
    age: number;
    position: string;
    private assignedEmployees?: IEmployee[];

    constructor (name: string, age: number, position: string, ){
        this.name = name;
        this.age = age;
        this.position = position;
    }

    addSubordinate(employee: IEmployee){
        this.assignedEmployees?.push(Subordinate)
    }
}

export default Manager;