import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Map from './Map';
import Swal from 'sweetalert2';
import '../App.css';

function Main() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [zones, setZones] = useState([]);
  const [selectedZone, setSelectedZone] = useState(null);
  const [gardeType, setGardeType] = useState(null);
  const [pharmacies, setPharmacies] = useState([]);

  useEffect(() => {
    fetch('https://backend-orpin-ten.vercel.app/api/cities')
      .then(response => response.json())
      .then(data => setCities(data));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      fetch(`https://backend-orpin-ten.vercel.app/api/zones/city/${selectedCity}`)
        .then(response => response.json())
        .then(data => setZones(data));
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedZone && gardeType) {
      fetch(`https://backend-orpin-ten.vercel.app/api/pharmacies/${gardeType}/${selectedZone}/${selectedCity}`)
        .then(response => response.json())
        .then(data => setPharmacies(data));
    }
  }, [selectedZone, gardeType]);

  const handleCityChange = event => {
    const cityId = event.target.value;
    setSelectedCity(cityId);
    setSelectedZone(null);
    setGardeType(null);
    setZones([]);
    setPharmacies([]);
  };

  const handleZoneChange = event => {
    const zoneId = event.target.value;
    setSelectedZone(zoneId);
  };

  const handleGardeTypeChange = event => {
    const type = event.target.value;
    setGardeType(type);
  };

  const generateRandomImageUrl = () => {
    const imageUrls = [
      'https://www.maroc.ma/sites/default/files/styles/thumbnail_detail_mobile/public/image_actualite/min_sante_11.05.jpg?itok=lXExFe_v',
      'https://www.monconseillerimmo.com/wp-content/uploads/pharmacie-1078x516.jpg.webp',
      'https://cdn.lemarocquejadore.com/wp-content/uploads/2020/03/PHARMACIE.MAROC_-1536x930.jpg',
      'https://aujourdhui.ma/wp-content/uploads/2021/02/pharmacie.jpg',
    'https://static.allodocteurs.africa/btf-12-1503-thumb-660/52977fa3cd506b9140c5abe95518c448/media.jpg'
    ];
  
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };
  

  return (
    <div className="d-flex">
      <div className="w-1000 h-1000 d-flex flex-column justify-content-between">
        <div className="d-flex flex-row">
          <div className="form-group">
            <label className="form-label" style={{ marginRight: '20px' }}>
              Ville:
            </label>
          </div>
          <select
            className="form-select mb-5 w-1000"
            value={selectedCity}
            onChange={handleCityChange}
            style={{ height: '40px', width: '40vw', marginBottom: '80px' }}
          >
            <option value="">Sélectionnez une ville</option>
            {cities.map(city => (
              <option key={city._id} value={city._id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex flex-row">
          <div className="form-group">
            <label className="form-label" style={{ marginRight: '20px' }}>
              Zone:
            </label>
          </div>
          <select
            className="form-select mb-5 w-1000"
            value={selectedZone}
            onChange={handleZoneChange}
            style={{ height: '40px', marginBottom: '80px' }}
            disabled={!selectedCity}
          >
            <option value="">Sélectionnez une zone</option>
            {zones.map(zone => (
              <option key={zone._id} value={zone._id}>
                {zone.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex flex-row">
          <div className="form-group">
            <label className="form-label" style={{ marginRight: '20px' }}>
              Garde:
            </label>
          </div>
          <select
            className="form-select mb-5 w-1000"
            value={gardeType}
            onChange={handleGardeTypeChange}
            style={{ height: '40px', marginBottom: '50px' }}
            disabled={!selectedZone}
          >
            <option value="">Sélectionnez le type de garde</option>
            <option value="jour">Garde de jour</option>
            <option value="nuit">Garde de nuit</option>
          </select>
        </div>

        {pharmacies.map(pharmacy => (
  <Card key={pharmacy._id} className="my-3">
    <Card.Body>
      <Card.Title>{pharmacy.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{pharmacy.address}</Card.Subtitle>
      <div >
        <img src={generateRandomImageUrl()} alt={pharmacy.name} className="image" /> {/* Ajoutez la classe CSS "image" ici */}
        <button
          onClick={() => {
            const message = `Nom:${pharmacy.name}
              Adresse: ${pharmacy.address}
              Latitude : ${pharmacy.latitude}
              Longitude : ${pharmacy.longitude}
              Type de garde: ${pharmacy.garde}`;

            Swal.fire({
              title: 'Détails de la pharmacie :',
              text: message,
              icon: 'info',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Ok'
            });
          }}
        >
          Afficher les détails de la pharmacie
        </button>
      </div>
    </Card.Body>
  </Card>
))}

      </div>
      <div className="w-100">
        <Map pharmacies={pharmacies} />
      </div>
    </div>
  );
}

export default Main;
