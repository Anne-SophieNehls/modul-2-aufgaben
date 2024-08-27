class Owner {
    _name: string;
    _adress: string;
    _portalcode: string;
    _city: string;
    _birthday?: string;


    constructor(name: string, adress: string, portalcode: string, city: string){
        // die parameter müssen nücht gleich heißen, wie die eigenschaften der class. es hilft aber sehr dem verständniss wenn es so ist
        this._name = name
        this._adress = adress
        this._portalcode = portalcode
        this._city = city

    }
    

}

export default Owner