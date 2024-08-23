class Songs {
private _title: string = ";"
protected _artist: string = ";"
public _durationInSeconds?: number = 0;

constructor(title: string, aritst: string){
    this._title = title;
    this._artist = aritst;
}
}

export default Songs;