import Circle from "./classes/circle"
import Manager from "./classes/manager";
import Rectangle from "./classes/rectangle";
import Subordinate from "./classes/subordinate";

//# Aufgabe 1
const circle1 = new Circle("circle", "red", 20, true);
const circle2 = new Circle("circle", "green", 150, true);
const circle3 = new Circle("circle", "blue", 350, true);

console.log(circle1, circle2, circle3);

//# Aufgabe 2
const rectangle1 = new Rectangle("viereck", "teal", 20, 30, false);
const rectangle2 = new Rectangle("viereck", "rose", 10, 50, false);
const rectangle3 = new Rectangle("viereck", "black", 600, 100, false);

console.log(rectangle1, rectangle2, rectangle3)

//# Aufgabe 3
const Dude1 = new Subordinate("Raph", 34, "Empfang" )
const Dude2 = new Subordinate("Britta", 56, "Hausmeister")
const Dude3 = new Subordinate("Leo", 16, "Azubi")

const manager = new Manager("Susi", 29, "Gebäudemanagement")
