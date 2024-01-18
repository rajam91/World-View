"use client"

import { getDetail } from "@/service/fetchUser";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import HomePage from "@/app/page";
import filteredSearch from "@/app/page";

type CountryDetail = {
  name: {
    official: string;
    common: string;
    native: string;
  };
  flags: {
    png: string;
  };
  tld: string[];
  latlng: number[];
  area: number;
  borders: string[];
  region: string;
  subregion: string;
  capital: string;
  independent: boolean;
  UnMember: boolean;
  population: number;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  gini: number;
  languages: {
    [key: string]: string;
  };
  demonym: {
    [key: string]: string;
  };
};

export default function Page({ params }: { params: { id: string } }) {
  const [country, setCountry] = useState<CountryDetail | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const country_id: string = params.id;

  useEffect(() => {
    
    if (country_id) {
      getDetail(country_id).then((data) => {
        console.log(data);
        setCountry(data[0]);
      });
    }
  }, [country_id]);

 
  if (!country) {
    return <div>Pays non trouvé</div>;
  }


return (
  <div>
      <div>
        <span>{country.name.official}</span>
        <div className="drapeau">
            <h1>
              <img
                src={country.flags.png}
                width={300}
                height={300}
                alt="Drapeau"
              />
            </h1>
          <div className="mb-4">
            <h2 className="text-xl font-bold">
              Informations de base sur le pays
            </h2>
            <p>Nom commun : {country.name.common}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Données géographiques</h2>
            <p>Latitude : {country.latlng[0]}</p>
            <p>Longitude : {country.latlng[1]}</p>
            <p>Superficie : {country.area} km²</p>
            <p>Région : {country.region}</p>
            <p>Sous-région : {country.subregion}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">
              Données politiques et administratives{" "}
            </h2>
            <p>Capitale : {country.capital}</p>
            <p>Indépendant : {country.independent ? "Oui" : "Non"}</p>
          </div>
        </div>
      </div>
  </div>
) }


//<Link href={``}></Link>