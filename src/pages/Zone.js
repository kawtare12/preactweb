
// import { useState, useEffect } from "react";


// const Zone = ({ ville, chooseZone }) => {
//   const [zones, setZones] = useState(null);
//   const [selectedZone, setSelectedZone] = useState("0");
//   const [selectedVille, setSelectedVille] = useState("0");
  
//   useEffect(() => {
//     const fetchZones = async () => {
//       console.log(`ville: ${zones}`)
//       const res = await fetch(
       
//         `http://localhost:3001/api/zones/city/${ville}`
//       );
//       const result = await res.json();
//       setZones(result);
//       console.log("res", result);
//     };
//     console.log(ville)
//     if (ville !== "0") {
//       fetchZones();
//       // setSelectedZone("0");
//     }
//   }, [ville]);

//   const handleSelectChange = (event) => {
//     setSelectedZone(event.target.value);
//     chooseZone(event.target.value);
//   };
//   return (
//     <>
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
//   );
  
// };

//  export default Zone
