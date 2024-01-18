import Link from 'next/link'; // permet de créer des liens entre les pages web
import { useState } from 'react';
import styles from '@/components/navbar/navbar.module.css'


const NavBar = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);      
  };
 return (
      <>
        <div>
          find countries <input onChange={handleSearch} value={search} type='search' />
          </div>

      </>
    );
  };
  

export default NavBar; 

// ce component permet de rechercher un pays


