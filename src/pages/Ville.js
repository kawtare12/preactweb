// import { useState } from "react";
// import Zone from "./Zone";

// const Ville = ({ ville, chooseZone }) => {
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [pharmacies, setpharmacies] = useState([]);

//   const handleVilleChange = (event) => {
//     setSelectedVille(event.target.value);
//     chooseZone("0");
//     console.log(selectedVille);
    
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   const handleSearchClick = async (event)=>{
//     console.log(selectedVille,selectedGarde)
//     fetch(`http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/6434299ec6b6e7eb17be89a4`).then(e=>e.json()).then(e=>{
//       console.log(e)
//       setpharmacies(e);
//     })
//   }
  
 

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
//       {selectedVille !== "0" && (
//          <Zone ville={selectedVille} garde={selectedGarde} chooseZone={chooseZone} />
        
//       )}
//       <button onClick={handleSearchClick}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default Ville;
// import { useState, useEffect } from "react";

// const Ville = ({ ville, chooseZone }) => {
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [pharmacies, setpharmacies] = useState([]);
//   const [zones, setZones] = useState([]);
//   const [selectedZone, setSelectedZone] = useState("0");

//   useEffect(() => {
//     const fetchZones = async () => {
//       console.log(`http://localhost:3001/api/zones/city/${selectedVille}`)
//       const res = await fetch(
//         // `http://localhost:3001/api/zones`
//         `http://localhost:3001/api/zones/city/${selectedVille}`
//       );
//       const result = await res.json();
//       setZones(result);
//       console.log(result);
//     };

//     if (selectedVille !== "0") {
//       fetchZones();
//       setSelectedZone("0");
//     }
//   }, [selectedVille]);

//   const handleVilleChange = (event) => {
//     setSelectedVille(event.target.value);
//     chooseZone("0");
//     console.log(selectedVille);
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   const handleZoneChange = (event) => {
//     setSelectedZone(event.target.value);
//     chooseZone(event.target.value);
//   };

//   // const handleSearchClick = async (event)=>{
//   //   console.log(selectedVille,selectedGarde)
//   //   fetch(`http://localhost:3001/api/pharmacies/${selectedGarde}/${selectedZone}/${selectedVille}`).then(e=>e.json()).then(e=>{
//   //     console.log(e)
//   //     setpharmacies(e);
//   //   })
//   // }
//   const handleSearchClick = async (event) => {
//     console.log(selectedVille, selectedGarde);
//     try {
//       const response = await fetch(`http://localhost:3001/api/pharmacies/${selectedGarde}/${selectedZone}/${selectedVille}`);
//       if (response.ok) {
//         const pharmacies = await response.json();
//         console.log(pharmacies);
//         setpharmacies(pharmacies);
//       } else {
//         console.error("Response not ok");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
  

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
//       {selectedVille !== "0" && (
//         <>
//           <h3 id="zonet">Zone:</h3>
//           <select
//             name="zones"
//             id="zone-select"
//             value={selectedZone}
//             onChange={handleZoneChange}
//           >
//             <option value="0">-- Veillez choisir une zone --</option>
//             {zones && zones.map((z) => (
//               <option key={z._id} value={z.name}>
//                 {z.name}
//               </option>
//             ))}
//           </select>
//         </>
//       )}
//       <button onClick={handleSearchClick}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default Ville;
// const Ville = ({ ville, chooseZone }) => {
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [selectedZone, setSelectedZone] = useState("0");
//   const [pharmacies, setpharmacies] = useState([]);

//   const handleVilleChange = (event) => {
//     setSelectedVille(event.target.value);
//     setSelectedZone("0");
//     console.log(selectedVille);
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   const handleSearchClick = async (event)=>{
//     console.log(selectedVille,selectedGarde,selectedZone)
//     fetch(`http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/6434299ec6b6e7eb17be89a4`).then(e=>e.json()).then(e=>{
//       console.log(e)
//       setpharmacies(e);
//     })
//   }

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
//       {selectedVille !== "0" && (
//         <Zone ville={selectedVille} garde={selectedGarde} chooseZone={(zoneId) => setSelectedZone(zoneId, selectedVille)} />
//       )}
//       <button onClick={handleSearchClick}>
//         Search
//       </button>
//   </div>
// );
// };
// export default Ville 
// import { useState,useEffect } from "react";
// // import Zone from "./Zone";

// const Ville = ({ ville, chooseZone }) => {
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [zones, setZones] = useState([]);
//   const [selectedZone, setSelectedZone] = useState("0");
  
//   // const [pharmacies, setpharmacies] = useState([]);
//   useEffect(() => {
//     const fetchZones = async () => {
//       console.log(`http://localhost:3001/api/zones/city/${ville}`)
//       const res = await fetch(
       
//         `http://localhost:3001/api/zones/city/${ville}`
//       );
//       const result = await res.json();
//       setZones(result);
//       console.log(result);
//     };
//     console.log(ville)
//     if (ville !== "0") {
//       fetchZones();
//       setSelectedZone("0");
//     }
// }, [ville])

//   const handleVilleChange = (event) => {
//     setSelectedVille(event.target.value);
//     chooseZone("0");
//     console.log(selectedVille);
    
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   // const handleSearchClick = async (event)=>{
//   //   console.log(selectedVille,selectedGarde)
//   //   fetch(`http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`).then(e=>e.json()).then(e=>{
//   //     console.log(e)
//   //     // setpharmacies(e);
//   //   })
//   // }
//   const handleSearchClick = async (event) => {
//     console.log(selectedVille, selectedGarde);
//     try {
//       const response = await fetch(`http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`);
//       const data = await response.json();
//       console.log(data);
//       // setpharmacies(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const handleSelectChange = (event) => {
//     setSelectedZone(event.target.value);
//     chooseZone(event.target.value);

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
     
//       {selectedVille !== "0" && (
       
      
       
//        <>
//        <h3 id="zonet">Zone:</h3>
//        <select
//          name="zones"
//          id="zone-select"
//          value={selectedZone}
//          onChange={handleSelectChange}
//        >
//          <option value="0">-- Veillez choisir une zone --</option>
//          {zones && zones.map((z) => (
//            <option key={z._id} value={z.name}>
//              {z.name}
//            </option>
//          ))}
//        </select>
//    </> 
   
//         //  <Zone ville={selectedVille} garde={selectedGarde} chooseZone={chooseZone} />

//       )}
       
//       <button onClick={handleSearchClick}>
//         Search
//       </button>
//     </div>
//   );
//          }}
// export default Ville

// import { useState } from "react";
// import Zone from "./Zone";

// const Ville = ({ ville, chooseZone }) => {
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [Pharmacies, setPharmacies] = useState([]);

//   const handleVilleChange = (event) => {
//     setSelectedVille(event.target.value);
//     chooseZone("0");
//     console.log(selectedVille);
    
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   const handleSearchClick = async (event)=>{
//     console.log(selectedVille,selectedGarde)
//     fetch(`http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`).then(e=>e.json()).then(e=>{
//       console.log(e)
//       setPharmacies(e);
//     })
//   }
//   // const handleSearchClick = async (event) => {
//   //       console.log(selectedVille, selectedGarde);
//   //       try {
//   //         const response = await fetch(`http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`);
//   //         const data = await response.json();
//   //         console.log(data);
//   //         setpharmacies(data);
//   //       } catch (error) {
//   //         console.log(error);
//   //       }
//   //     }
//       // const handleSelectChange = (event) => {
//       //   setSelectedZone(event.target.value);
//       //   chooseZone(event.target.value);
    

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
//       {selectedVille !== "0" && (
//         <Zone ville={selectedVille} garde={selectedGarde} chooseZone={chooseZone} />
//       )}
//       <button onClick={handleSearchClick}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default Ville ;
//hada howacode 


// import { useState,useEffect } from "react";
// // import Zone from "./Zone";
// import Pharmacies from "./Pharmacie";

// const Ville = ({ ville, chooseZone }) => {
//   const [zones, setZones] = useState([]);
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [searched, setSearched] = useState(false);
//   const [pharmacies, setPharmacies] = useState([]);
//   const [selectedZone, setSelectedZone] = useState("0");
//   useEffect(() => {
//     const fetchZones = async () => {
//       console.log(`http://localhost:3001/api/zones/city/${ville}`)
//       const res = await fetch(
       
//         `http://localhost:3001/api/zones/city/${ville}`
//       );
//       const result = await res.json();
//       setZones(result);
//       console.log(result);
//     };
//     console.log(ville)
//     if (ville !== "0") {
//       fetchZones();
//       setSelectedZone("0");
//     }
//   }, [ville]);

//   const handleVilleChange = (event) => {
//     setSelectedVille(event.target.value);
//     chooseZone("0");
//     console.log(selectedVille);
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   const handleSearchClick = async (event) => {
//     console.log(selectedVille, selectedGarde);
//     const response = await fetch(
//       `http://localhost:3001/api/pharmacies/${selectedGarde}/${selectedZone}/${selectedVille}`
      
//     );
//     console.log(selectedGarde);
//     console.log(selectedZone);
//     console.log(selectedVille);
//     const data = await response.json();
//     setPharmacies(data);
//     setSearched(true);
//   };

//   const handleSelectChange = (event) => {
//     setSelectedZone(event.target.value);
//     chooseZone(event.target.value);
//   };

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
     

//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
//       {selectedVille !== "0" && (
//         // <Zone ville={selectedVille} garde={selectedGarde} chooseZone={chooseZone} />
//         <>
//       <h3 id="zonet">Zone:</h3>
//       <select
//         name="zones"
//         id="zone-select"
//         value={selectedZone}
//         onChange={handleSelectChange}
//       >
//         <option value="0">-- Veillez choisir une zone --</option>
//         {zones && zones.map((z) => (
//           <option key={z._id} value={z.name}>
//             {z.name}
//           </option>
//         ))}
//       </select>
//   </>
//       )}
//       <button onClick={handleSearchClick}>Search</button>
//       {searched && (
//         <Pharmacies selectedVille={selectedVille} selectedZone={selectedZone} selectedGarde={selectedGarde} pharmacies={pharmacies} />
//       )}
//     </div>
//   );
// };

// export default Ville;
 




//////////////////////////////////////////////////////////////////////////////////










//hada lekher 
// import { useState } from "react";
// import Zone from "./Zone";
// import Pharmacies from "./Pharmacie";

// const Ville = ({ ville, chooseZone }) => {
//   const [selectedVille, setSelectedVille] = useState("0");
//   const [selectedGarde, setSelectedGarde] = useState("jour");
//   const [searched, setSearched] = useState(false);
//   const [pharmacies, setPharmacies] = useState([]);
//   const [selectedZone, setSelectedZone] = useState(null);

//   const handleVilleChange = (event) => {
//     console.log(event.target.value)
//     setSelectedVille("vi;", event.target.value);
//     chooseZone("0");
//     console.log(selectedVille);
//   };

//   const handleGardeChange = (event) => {
//     setSelectedGarde(event.target.value);
//   };

//   const handleSearchClick = async (event) => {
//     console.log(selectedVille, selectedGarde);
//     const response = await fetch(
//       `http://localhost:3001/api/pharmacies/${selectedGarde}/${selectedZone}/${selectedVille}`
      
//     );
//     console.log(selectedGarde);
//     console.log(selectedZone);
//     console.log(selectedVille);
//     const data = await response.json();
//     setPharmacies(data);
//     setSearched(true);
//   };

//   return (
//     <div className="selection">
//       <h3 id="villet">Ville:</h3>
//       <select
//         name="villes"
//         id="ville-select"
//         value={selectedVille}
//         onChange={handleVilleChange}
//       >
//         <option value="0">-- Veuillez choisir une ville --</option>
//         {ville.map((v) => (
//           <option key={v._id} value={v._id}>
//             {v.name}
//           </option>
//         ))}
//       </select>
//       <div>
//         <label htmlFor="garde-select">Garde :</label>
//         <select
//           name="garde"
//           id="garde-select"
//           value={selectedGarde}
//           onChange={handleGardeChange}
//         >
//           <option value="jour">Jour</option>
//           <option value="nuit">Nuit</option>
//         </select>
//       </div>
//       {selectedVille !== "0" && (
//         <Zone ville={selectedVille} garde={selectedGarde} chooseZone={chooseZone} />
//       )}
//       <button onClick={handleSearchClick}>Search</button>
//       {searched && (
//         <Pharmacies selectedVille={selectedVille} selectedZone={selectedZone} selectedGarde={selectedGarde} pharmacies={pharmacies} />
//       )}
//     </div>
//   );
// };

// export default Ville;