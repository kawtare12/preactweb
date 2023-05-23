// import { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";


// const Pharmacies = ({ selectedVille, selectedZone, selectedGarde, searchClicked }) => {
//   const [pharmacies, setPharmacies] = useState([]);

//   useEffect(() => {
//     const fetchPharmacies = async () => {
//       const response = await fetch(
//         `http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`
//       );
//       const data = await response.json();
//       setPharmacies(data);
//     };

//     if (searchClicked && selectedVille !== "0" && selectedZone !== "0") {
//       fetchPharmacies();
//     }
//   }, [selectedVille, selectedZone, selectedGarde, searchClicked]);

//   return (
//     <>
//       {searchClicked && pharmacies.length > 0 ? (
//         <div className="d-flex flex-wrap justify-content-around">
//           <Map Pharmacies={Pharmacies}/>

//           {pharmacies.map((pharmacy) => (
//             <Card
//               key={pharmacy._id}
//               style={{ width: "18rem", margin: "1rem" }}
//             >
//               <Card.Body>
//                 <Card.Title>{pharmacy.name.toString()}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">
//                   {pharmacy.zone.toString()}
//                 </Card.Subtitle>
//                 <ListGroup variant="flush">
//                   <ListGroup.Item>
//                     Adresse : {pharmacy.address.toString()}
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     Latitude : {pharmacy.latitude.toString()}
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     Longitude : {pharmacy.longitude.toString()}
//                   </ListGroup.Item>
//                   <ListGroup.Item>
//                     Garde : {pharmacy.garde.toString()}
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card.Body>
//             </Card>
//           ))}
//         </div>
//       ) : (
//         <p>Sélectionnez une ville, une zone et le type de garde, puis cliquez sur le bouton "Search" pour afficher les pharmacies disponibles.</p>
//       )}
//     </>
//   );
// };

// export default Pharmacies;
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Pharmacies = ({ selectedVille, selectedZone, selectedGarde }) => {
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      const response = await fetch(
        `http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`
      );
      const data = await response.json();
      setPharmacies(data);
    };

    if (selectedVille !== "0" && selectedZone !== "0") {
      fetchPharmacies();
    }
  }, [selectedVille, selectedZone, selectedGarde]);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {pharmacies.map((pharmacy) => (
        <Card
          key={pharmacy._id}
          style={{ width: "18rem", margin: "1rem" }}
        >
          <Card.Body>
            <Card.Title>{pharmacy.name.toString()}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {pharmacy.zone.toString()}
            </Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Adresse : {pharmacy.address.toString()}
              </ListGroup.Item>
              <ListGroup.Item>
                Latitude : {pharmacy.latitude.toString()}
              </ListGroup.Item>
              <ListGroup.Item>
                Longitude : {pharmacy.longitude.toString()}
              </ListGroup.Item>
              <ListGroup.Item>
                Garde : {pharmacy.garde.toString()}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Pharmacies;
// import { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";

// const Pharmacies = ({ selectedVille, selectedZone, selectedGarde, showResults }) => {
//   const [pharmacies, setPharmacies] = useState([]);

//   useEffect(() => {
//     const fetchPharmacies = async () => {
//       const response = await fetch(
//         `http://localhost:3001/api/pharmacies/jour/64332fa6c2617eb1ec33f9a1/64332cc0c2617eb1ec33f99b`
//       );
      
//       const data = await response.json();
     
//       setPharmacies(data);
//     };

//     if (selectedVille !== "0" && selectedZone !== "0" && showResults) {
//       fetchPharmacies();
//     }
//   }, [selectedVille, selectedZone, selectedGarde, showResults]);

//   return (
//     <div className="d-flex flex-wrap justify-content-around">
//       {pharmacies.map((pharmacy) => (
//         <Card
//           key={pharmacy._id}
//           style={{ width: "18rem", margin: "1rem" }}
//         >
//           <Card.Body>
//             <Card.Title>{pharmacy.name.toString()}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               {pharmacy.zone.toString()}
//             </Card.Subtitle>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 Adresse : {pharmacy.address.toString()}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Latitude : {pharmacy.latitude.toString()}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Longitude : {pharmacy.longitude.toString()}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 Garde : {pharmacy.garde.toString()}
//               </ListGroup.Item>
//             </ListGroup>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default Pharmacies;