class Customer {
    private _name: string;
    private _email: string;
    private _address: string;
    private _postalCode: number;
    private _city: string;
  
    constructor(
      name: string,
      email: string,
      address: string,
      postalCode: number,
      city: string
    ) {
      this._name = name;
      this._email = email;
      this._address = address;
      this._postalCode = postalCode;
      this._city = city;
    }
  
    //   - get & set
    get name(): string {
      return this._name;
    }
  
    get email(): string {
      return this._email;
    }
  
    get address(): string {
      return this._address;
    }
  
    set address(value: string) {
      this._address = value;
    }
  
    get postalCode(): number {
      return this._postalCode;
    }
  
    get city(): string {
      return this._city;
    }
  
    set city(value: string) {
      this._city = value;
    }
  
    //   - methods
    setName(value: string) {
      if (value.length > 60) {
        console.log("Name can have a max of 60 characters.");
      } else {
        this._name = value;
      }
    }
  
    setPostalCode(value: number) {
      if (value < 0 && value > 99999 && value ===  5) {
        console.log("Postalcode must contain 5 numbers between 00000 and 99999.");
      } else {
        this._postalCode = value;
      }
    }
  
    setEmail(value: string) {
      if (!value.includes("@") || !value.includes(".")) {
        console.log("Email must contain @ and .");
      } else {
        this._email = value;
      }
    }
  }
  
  export default Customer;
  