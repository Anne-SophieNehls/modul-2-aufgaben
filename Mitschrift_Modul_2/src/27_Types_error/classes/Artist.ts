class Artist {
  constructor(
    public name: string,
    public yearOfBirth: number,
    public yearOfDeath?: number
  ) {
    //denkt dran: kann ich soagar auch raus lassen
  }
}

export default Artist;

try {
  console.log()
} catch (error){

}

const divide = (a: number, b: number) =>{
  if(b === 0){
    throw new Error ("division geht nicht durch 0")
  }
  return a / b
}