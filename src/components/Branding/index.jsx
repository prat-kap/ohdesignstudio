import { Container, Row, Col } from 'react-bootstrap';

import LinksSection from 'src/components/LinksSection';
import CharacterBrandingBanner from 'src/assets/Character_branding.jpg';
import 'src/components/Branding/Branding.css';

const Branding = () => {
  return (
    <Container fluid className='character-branding h-100'>
      <Row className='branding-row h-100'>
        <Col xs={7} className='text-branding-section'>
          <h2 className='branding-heading'>
            Character is a branding and design agency with studios in New York
            and San Francisco.
          </h2>
          <p className='branding-intro'>
            Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
            digital landscape change dramatically. Our industry has transformed,
            our clients&apos; businesses and their challenges have become more
            complex, consumer behavior has shifted, and we, as a company, have
            evolved with those changes along with it.
          </p>
          <p className='link-branding-section'>
            <LinksSection title='ABOUT US' link='/about' />
          </p>
        </Col>
        <Col xs={5} className='image-branding-section'>
          <img
            src={CharacterBrandingBanner}
            alt='Character Branding'
            className='image'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Branding;
