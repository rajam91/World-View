import {API} from '@/service/import-api'

const getCountry = async () => {
  return API.get('https://restcountries.com/v3.1/all')
  .then((response) => 
  {
    return response.data
  })
}

export default getCountry;


export  const getDetail = async(id : number) => {
  return await API.get(`https://restcountries.com/v3.1/alpha/${id}`).then((response) => {
    return response.data
  });
}

//API.get("/alpha/" + id);


// .then récupère les données depuis une API