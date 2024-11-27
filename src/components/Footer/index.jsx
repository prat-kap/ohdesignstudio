import { Container, Row, Col } from 'react-bootstrap';

// import LinksSection from 'src/components/LinksSection';
import 'src/components/Footer/Footer.css';
import LinksSection from '../LinksSection';

export const Footer = () => {
  return (
    <Container fluid className='footer-section h-100'>
      <Row className='footer-row h-100'>
        <Col xs={3} className='footer-address-col'>
          <Row>
            <h4 className='footer-items-heading'>Address:</h4>
            <p className='footer-address-text'>
              402, Makani Center, <br />
              35th Linking Road, <br />
              Bandra (W), 400050.
            </p>
          </Row>
          <Row>
            <h4 className='footer-items-heading'>Phone:</h4>
            <p className='footer-phone'>+91 26616280</p>
          </Row>
          <Row>
            <h4 className='footer-items-heading'>Inquiries:</h4>
            <p className='footer-inquiry'>
              <LinksSection title='Lets talk' link='/contact' />
            </p>
          </Row>
          <Row>
            <h4 className='footer-items-heading'>Careers:</h4>
            <p className='footer-careers-text'>
              <LinksSection title='View openings' link='/careers' />
            </p>
          </Row>
          <Row>
            <h4 className='footer-items-heading'>Follow:</h4>
            <p className='socail-media-images'></p>
          </Row>
        </Col>
        <Col xs={5} className='footer-services-col'>
          <Row>
            <h4 className='footer-items-heading'>Our Services:</h4>
            <ul className='footer-services-item'>
              <li>Brand Insights and Audit</li>
              <li>Brand Strategy and Positioning</li>
              <li>Brand Architecture</li>
              <li>Brand Story and Narratives</li>
              <li>Voice and Communication</li>
              <li>Naming and Identity System</li>
              <li>Branded Environment</li>
              <li>Brand Internalisation</li>
              <li>Brand Governance</li>
            </ul>
          </Row>
          <Row>
            <h4 className='footer-items-heading'>Find Us:</h4>
            <p className='footer-map'>Google Map</p>
          </Row>
          <Row>
            <h4 className='footer-items-heading'>Copyright 2020</h4>
            <p className='footer-rights'>All Rights Reserved</p>
          </Row>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
