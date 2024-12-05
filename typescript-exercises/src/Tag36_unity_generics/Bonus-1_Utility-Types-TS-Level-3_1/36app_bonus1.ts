import ISmoothie from "./interface/ismoothie";

//# Utility-Types-TS-Level-3_1
console.log("%c Utility-Types-TS-Level-3_1 ", "background: darkred; color: white");

function customizeSmoothie<T extends ISmoothie>(basicSmoothie: T,customizedSmoothie: Partial<T>): T {
    return {
      ...basicSmoothie,
      ...customizedSmoothie,
    };
  }

  const basicSmoothie: ISmoothie = {
    name: "Smoothie violet",
    ingredients: ["Birne", "Guave", "Guave"],
    size: "medium",
    price: 4.5,
  };
  
  const customizedSmoothie = customizeSmoothie(basicSmoothie, {
    size: "large",
    price: 5.2,
  });
  
  console.log(customizedSmoothie);