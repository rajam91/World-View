"use client"

import React, { useEffect, useState } from 'react';
import { API } from '@/service/import-api'
import getPays from '../service/fetchUser';
import NavBar from '@/components/navbar/Navbar';
import CountryCard from '@/components/CountryCard/Countrycard';
import  Link  from 'next/link';
import { useRouter } from 'next/router';
import "./globals.css"


type Country = {
name : {
  official: string;
}
flags : {
  png: string;
}
detail_page: string
}

const HomePage = () => {
  const [countries , setCountries] = useState([]); //stocker le retour de l'api
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    getPays().then((data) => {
      console.log(data);
      setCountries(data);
  },)
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredSearch = countries.filter((country)=>
    country.name.official.toLowerCase().includes(search.toLowerCase())
  )
  
  return (
    <div>
      <div>
      <div className='navbar'></div>
      </div>
      <div>
        <div className="parent-class">
          <input
            type="text"
            placeholder="Search countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredSearch.map((country: Country) => (
            <div key={country.name.official} className="country-card">
              <Link href={`/country/${country.ccn3}`}>
                <span>{country.name.official}</span>
              </Link>
              <div className='drapeau'>
                <h1>
                  <img
                    src={country.flags.png}
                    width={150}
                    height={80}
                    alt="Flag"
                  />
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;


//la méthode filter permet de répondre à la recherche effectué 
//dans la barre de recherche
// filteredSearch va permettre de filtrer dans la liste des pays