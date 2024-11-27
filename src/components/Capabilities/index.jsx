import { Container, Row, Col } from 'react-bootstrap';
import 'src/components/Capabilities/Capabilities.css';

const Capabilities = () => {
  return (
    <Container fluid className='capabilities h-100'>
      <Row className='capabilities-row h-100'>
        <Col xs={2} className='heading-capabilities-section'>
          <h2 className='capabilities-heading'>Capabilities</h2>
        </Col>
        <Col xs={7} className='lists-capabilities-section'>
          <ul className='lists-capabilities-wrapper'>
            <li>
              <span>01</span>Branding & Design
            </li>
            <li>
              <span>02</span>Packaging Design
            </li>
            <li>
              <span>03</span>Digital Marketing
            </li>
            <li>
              <span>04</span>Environmental Graphics
            </li>
          </ul>
        </Col>
        <Col xs={3} className='capabilities-intro'>
          Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
          digital landscape change dramatically. Our industry has transformed,
          our clients&apos; businesses and their challenges have become more
          complex, consumer behavior has shifted, and we, as a company, have
          evolved with those changes along with it.
        </Col>
      </Row>
    </Container>
  );
};

export default Capabilities;
