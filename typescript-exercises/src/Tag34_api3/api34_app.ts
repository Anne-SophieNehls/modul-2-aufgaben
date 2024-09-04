import { ICountry, IFlags, IName, INativeName } from "./Interface/IFlags";


const BASE_URL = "https://restcountries.com/v3.1/all";
const COUNTRYFLAGS_URL = `${BASE_URL}?fields=name,flags`;

const contentDiv = document.getElementById("content") as HTMLDivElement;
const searchInput = document.getElementById("search") as HTMLInputElement;

//- Fetch
fetch(COUNTRYFLAGS_URL)
  .then((resp: Response) => {
    if (!resp.ok) {
      throw new Error("An error occured");
    }
    return resp.json();
  })
  .then((data: ICountry[]) => {
    displayCountries(data);
  })
  .catch((err: Error) => {
    console.error("Error fetching data", err);
    contentDiv.innerHTML = `<p>Error fetching data: ${err.message}</p>`;
  });


  function displayCountries(countries: ICountry[]) {
    contentDiv.innerHTML = "";
  
    countries.forEach((country) => {
    const countryDiv = document.createElement("div") as HTMLDivElement;
    countryDiv.className = "country";
    contentDiv.appendChild(countryDiv);

    const flagImg = document.createElement("img") as HTMLImageElement;
    flagImg.src = country.flags.png;
    flagImg.alt = country.flags.alt || `Flag of` + country.name.common;
    countryDiv.appendChild(flagImg);

    const countryName = document.createElement("h3") as HTMLHeadElement;
    countryName.textContent = country.name.common;
    countryDiv.appendChild(countryName);

    const officialName = document.createElement("h4") as HTMLHeadElement;
    officialName.textContent = `Officialy known as: ${country.name.official}`;
    countryDiv.appendChild(officialName);

    const nativeNames = Object.values(country.name.nativeName);
    const nativeOfficialName = nativeNames.map((name) => name.official);
    const nativeName = document.createElement("p") as HTMLParagraphElement;
    nativeName.textContent = `Countryname in native language: ${nativeOfficialName} `;
    countryDiv.appendChild(nativeName);

    const flagInfo = document.createElement("p") as HTMLParagraphElement;
    flagInfo.textContent = `Info about flag: ${country.flags.alt}` || `n/a`;
    countryDiv.appendChild(flagInfo);
    })

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCountries = countries.filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm)
        );
        displayCountries(filteredCountries);
      });
    }