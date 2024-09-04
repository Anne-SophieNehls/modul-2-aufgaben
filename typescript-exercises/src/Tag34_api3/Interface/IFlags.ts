export interface IFlags {
    png: string;
    svg: string;
    alt?: string;
  }
  
  export interface IName {
    common: string;
    official: string;
    nativeName: INativeName;
  }
  
  export interface INativeName {
    [key: string]: {
      official: string;
      common: string;
    };
  }
  
  export interface ICountry {
    flags: IFlags;
    name: IName;
  }