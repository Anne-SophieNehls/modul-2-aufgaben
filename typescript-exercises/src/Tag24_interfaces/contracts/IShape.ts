interface IShape {
    name: string;
    color: string;
    isround: boolean;

    draw(): void;
}

export default IShape;