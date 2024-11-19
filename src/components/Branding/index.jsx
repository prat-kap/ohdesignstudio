import { Container, Row, Col } from 'react-bootstrap';
import CharacterBrandingBanner from 'src/assets/Character_branding.jpg';
import 'src/components/Branding/Branding.css';

const Branding = () => {
  return (
    <Container fluid className='character-branding'>
      <Row className="branding-row h-100">
        <Col xs={8} className="text-section" >
          <h2>
            Character is a branding and design agency with studios in New York
            and San Francisco.
          </h2>
          <p>
            Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
            digital landscape change dramatically. Our industry has transformed,
            our clients&apos; businesses and their challenges have become more
            complex, consumer behavior has shifted, and we, as a company, have
            evolved with those changes along with it.
          </p>
          <a href="#" className='link-section'>ABOUT US</a>
        </Col>
        <Col xs={4} className='image-section'>
          <img src={CharacterBrandingBanner} alt="Character Branding" className="image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Branding;
