export class ShoppingCardItems{
    _productName: string;
    _price: number;
    _index: number;

    constructor(productName: string, price: number, index: number){
        this._productName = productName
        this._price = price
        this._index = index
    }
}

export default ShoppingCardItems