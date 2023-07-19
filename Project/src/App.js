import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import House from './Components/House';
import SearchFilter from './Components/SearchFilter';
import SearchResults from './Components/SearchResults';
import {Routes,Route} from 'react-router-dom';
import SearchedHouse from './Components/SearchedHouse';
import Results from './Components/Results';

function App() {


  let [allHouses,setAllHouses] = useState([]);

  useEffect( () => {
    async function getHousesInfo(){
      let resp = await fetch('houses.json');
      let data = await resp.json();
      console.log(data);
      setAllHouses(data);
    }
    getHousesInfo();
  },[]);

  let [allPrices,setAllPrices] = useState([]);

  useEffect( () => {
    async function getPricesInfo(){
      let response = await fetch('houses.json');
      let info = await response.json();
      console.log(info);
      setAllPrices(info);
    }
    getPricesInfo();
  },[]);


  return (
    <div className="App">
      {/* <h1> Hello World!</h1> */}
      <Header/>
      <SearchFilter houses={allHouses}/>
      

{/* Routing */}
    <Routes>
      <Route path ="/" element={<House houses={allHouses}/>} />
      <Route path="searchresults/:county" element={<SearchResults houses={allHouses}/>} />
      <Route path="searchedhouse/:id" element={<SearchedHouse houses={allHouses}/>} />
      <Route path="searchedprices/:price" element={<Results houses={allHouses}/>}/>
    </Routes>
    </div>
  );




}


export default App;