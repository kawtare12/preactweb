// import logo from './logo.svg';
// import './App.css';
// import Header from'./pages/Header';
// import Footer from'./pages/Footer';
// import {useState,useEffect} from 'react'
// import Ville from './pages/Ville';
// import Zone from './pages/Zone';



// function App() {
//    const [villes , setVilles] = useState([])
//   const [selected_zone , setSelected_Zone] = useState("0")
//    const chooseZone = (id) => {
//    setSelected_Zone(id);
//  };

//   useEffect(() => {

//   const fetchVille = async () => { 
//     const res = await fetch('http://localhost:3001/api/cities')
//     const result = await res.json()
//     console.log(result)
//     setVilles(result)
//   }
//   fetchVille() 
// }, [selected_zone] )
 
//     return(
         
//       <div className="App">
//       <Header />
//         <Ville ville={villes} chooseZone={chooseZone} />
        
          
//           <Footer/>

//          </div>
//       )
    
   
    
// }
// export default App
//hadi app hia li kanet
// import logo from './logo.svg';
// import './App.css';
// import Header from'./pages/Header';
// import Footer from'./pages/Footer';
// import {useState,useEffect} from 'react'
// import Ville from './pages/Ville';
// import Zone from './pages/Zone';
// import { MapContainer, TileLayer } from "react-leaflet";

// import Map from "./pages/Map"
// function App() {
//    const [villes , setVilles] = useState([])
//   const [selected_zone , setSelected_Zone] = useState("0")
//   const [selected_ville , setSelected_ville] = useState("0")


//    const chooseZone = (id) => {
//    setSelected_Zone(id);
//  };

//   useEffect(() => {

//   const fetchVille = async () => { 
//     const res = await fetch('http://localhost:3001/api/cities')
//     const result = await res.json()
//     console.log(result)
//     setVilles(result)
//   }
//   fetchVille() 
// }, [] )
 
//     return(
         
//       <div className="App">
//       <Header />
//         <Map/>
//         <Ville ville={villes} setSelected_ville={setSelected_ville} chooseZone={chooseZone} />
       
          
//           <Footer/>

//          </div>
//       )
    
   
    
// }
// export default App
// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
// import { useState, useEffect } from "react";
// import Ville from "./pages/Ville";
// import Zone from "./pages/Zone";

// function App() {
//   const [villes, setVilles] = useState([]);
//   const [selected_city, setSelected_city] = useState("0");
//   const [selected_zone, setSelected_Zone] = useState("0");

//   const chooseZone = (city_id, zone_id) => {
//     setSelected_city(city_id);
//     setSelected_Zone(zone_id);
//   };

//   useEffect(() => {
//     const fetchVille = async () => {
//       const res = await fetch("http://localhost:3001/api/cities");
//       const result = await res.json();
//       setVilles(result);
//     };
//     fetchVille();
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <Ville ville={villes} chooseZone={chooseZone} />
//       {/* <Zone ville={selected_city} selectedZone={selected_zone} /> */}
//       <Footer />
//     </div>
//   );
// }

// export default App
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Ville from "./pages/Ville";
// import Pharmacie from"./pages/Pharmacie"
// function App() {
//   const [villes, setVilles] = useState([]);
//   const [selectedZone, setSelectedZone] = useState("");

//   useEffect(() => {
//     const fetchVilles = async () => {
//       const res = await fetch("http://localhost:3001/api/cities");
//       const result = await res.json();
//       setVilles(result);
//     };
//     fetchVilles();
//   }, []);

//   const handleZoneChange = (zone) => {
//     setSelectedZone(zone);
//   };

//   return (
//     <div className="App">
//       <h1>Choisir une ville et une zone</h1>
//       <Ville ville={villes} chooseZone={handleZoneChange} />
//       {selectedZone && <h2>Zone sélectionnée : {selectedZone}</h2>}
      
      
//     </div>
//   );
// }

// export default App
// import { useState, useEffect } from "react";
// import Ville from "./pages/Ville";
// import Zone from "./pages/Zone";

// function App() {
//   const [villeList, setVilleList] = useState([]);
//   const [zoneList, setZoneList] = useState([]);
//   const [selected_zone, setSelectedZone] = useState("0");
//   const chooseZone = (id) => {
//     setSelected_Zone(id);
//   };
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:3001/api/cities");
//       const data = await res.json();
//       setVilleList(data);
//     }
//     fetchData();
//   },  [selected_zone]);

//   useEffect(() => {
//     async function fetchData() {
//       if (selectedZone === "0") {
//         setZoneList([]);
//         return;
//       }
//       const res = await fetch(`http://localhost:3001/api/cities/${selectedZone}/zones`);
//       const data = await res.json();
//       setZoneList(data);
//     }
//     fetchData();
//   }, [selectedZone]);

//   const handleZoneChange = (zoneId) => {
//     setSelectedZone(zoneId);
//   };

//   return (
//     <div className="App">
//       <Ville ville={villeList} chooseZone={handleZoneChange} />
      
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
// import './App.css';
// import Header from'./pages/Header';
// import Footer from'./pages/Footer';
// import {useState,useEffect} from 'react'
// import Ville from './pages/Ville';
// import Zone from './pages/Zone';
// import Map from './pages/Map';
// function App() {
//   const [cities, setCities] = useState([]);
//   const [selected_city, setSelectedCity] = useState("0");
//   const [selectedZone, setSelectedZone] = useState("0");
  
//   const chooseCity = (id) => {
//     setSelectedCity(id);
//   };

//   useEffect(() => {
//     const fetchCities = async () => { 
//       const res = await fetch('http://localhost:3001/api/cities');
//       const result = await res.json();
//       console.log(result);
//       setCities(result);
//     };
//     fetchCities(); 
//   }, [selected_city]);

//   return (
//     <div className="App">
//       <Header />
//       <Ville cities={cities} chooseCity={chooseCity} />
//       <Map/>
//       <Footer />
//     </div>
//   );
// }

// export default App;
import './App.css';
import Header from'./pages/Header';
import Footer from'./pages/Footer';
import Main from './pages/Main';
import React, { useState } from 'react';

function App() {
  
  const [pharmacies, setPharmacies] = useState([]);
  const fetchPharmacie = async () => {
      const res = await fetch('http://localhost:3001/api/pharmacies/${gardeType}/${selectedZone}/${selectedCity}')
      const result = await res.json()
      setPharmacies(result)
    }


   
  
 
    return(
         
      <div className="App">
    
      <Header />
      <h1 style={{
fontSize: '3rem',
textAlign: 'center',
margin: '2rem 0',
textTransform: 'uppercase'
}}>Pharmacies près de chez vous</h1>
       <Main/> 
      

          <Footer/>

         </div>
      )
    
   
    
}
export default App