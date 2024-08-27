class CreditCard {
  _creditCardNumber: number;
  _cardHolder: string;
  _expirationDate: Date;
  _cvv: number;

  constructor(
    creditCardNumber: number,
    cardHolder: string,
    expirationDate: Date,
    cvv: number
  ) {
    this._creditCardNumber = creditCardNumber;
    this._cardHolder = cardHolder;
    this._expirationDate = expirationDate;
    this._cvv = cvv;
  }
}
export default CreditCard;
