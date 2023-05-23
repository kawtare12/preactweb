import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer style={{backgroundColor: "#53b4a4"}} className="py-5">
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h5 className="text-white">Coordonnées :</h5>
            <p className="text-white">Adresse : 123 rue de la Rue, 75000 Paris</p>
            <p className="text-white">Téléphone : 01 23 45 67 89</p>
            <p className="text-white">Email : contact@monapplication.com</p>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="text-white">Suivez-nous sur :</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/monapplication" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.twitter.com/monapplication" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/monapplication" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;


