import { type } from 'os';
import React from 'react';
import styles from '@/components/CountryCard/CountryCard.module.css'

type CountryCardProp = {
  name : string,
  flag :string,
}
const CountryCard = ({ name, flag }: CountryCardProp) => {
  
  return (
    <div>
      <h2>{name}</h2>
     <img src={flag} alt=''/>
    </div>
    
  );
}

export default CountryCard;




