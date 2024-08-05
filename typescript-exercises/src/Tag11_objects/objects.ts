//_______________Objekte-TS-Level-1_3____________________

type Apple = {
    color: string;
    size: string;
    isSweet: boolean
  };
  
let redApple: Apple = { color: 'red', size: 'big', isSweet: false };
let greenApple: Apple = { color: 'green', size: 'small', isSweet: true };
let yellowApple: Apple = { color: 'yellow', size: 'big', isSweet: false };
let pinkApple: Apple = {color: 'pink', size: 'medium', isSweet: true};
let apples: Apple[] = [redApple, greenApple, yellowApple];
apples.push(pinkApple);

for (let apple = 0; apple < apples.length; apple++){
    console.log(apples[apple].size);
}

apples.forEach((apfel)=>{
    console.log(apfel.color);
})
console.log(apples.length)

//_______________Objekte-TS-Level-1_4________________________

type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];

console.log(unsereHaustiere[0].namen[1]) // Nala
console.log(unsereHaustiere[1].namen[2]) // Droopy

unsereHaustiere.forEach((tiere)=>{
    console.log(tiere.namen)
})

unsereHaustiere[0].namen[2] = "Pinky"
unsereHaustiere[1].namen[2] = "Snoopy"

unsereHaustiere.forEach((tiere)=>{
    console.log(tiere.namen)
})

let hamster: Pet = {
    tiertyp: "Hamlster",
    namen: ["Hamtaro", "Krümel", "Oreo"]
}
unsereHaustiere.push(hamster)

let pferd: Pet = {
    tiertyp: "Pferd",
    namen: ["Berkana", "Darina", "Sallitos", "Gigi", "Lapita"]
}

unsereHaustiere.push(pferd)

console.log(unsereHaustiere)


//____________Objekte-TS-Level-1_5__________

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2) //Geheimnisse
console.log(unserLager.schrank["Untere Schublade"]) //Cola
console.log(unserLager.schreibtisch.schublade) // Helfer

//____________Objekte-TS-Level-1_6_______________

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];