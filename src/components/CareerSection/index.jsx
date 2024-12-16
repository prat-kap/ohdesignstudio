import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LinksSection from 'src/components/LinksSection';
import CharacterBrandingBanner from 'src/assets/Character_branding.jpg';
import 'src/components/CareerSection/CareerSection.css';

import { roles } from 'src/data/constants.js';

const CareerSection = () => {
  return (
    <Container fluid className='career-section h-100'>
      <Row className='career-section-row h-100'>
        <Col xs={4} className='text-career-section h-100'>
          <h2 className='career-heading'>Life at OH! Design</h2>
          <p className='career-subtext'>
            Spit polished on the streets of Hell&apos;s Kitchen. Refined at the
            table of Peter Luger
          </p>
          <p className='career-intro'>
            Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
            digital landscape change dramatically. Our industry has transformed,
            our clients&apos; businesses and their challenges have become more
            complex, consumer behavior has shifted, and we, as a company, have
            evolved with those changes along with it.
          </p>
        </Col>
        <Col xs={3} className='image-career-section h-100'>
          <img
            src={CharacterBrandingBanner}
            alt='Character Branding'
            className='image'
          />
          <img
            src={CharacterBrandingBanner}
            alt='Character Branding'
            className='image'
          />
        </Col>
        <Col xs={5} className='roles-career-section h-100'>
          {roles.map(({ role, id }) => (
            <h4 className='career-roles' key={id}>
              <Link to={role}>
                <p>{id}</p>
                {role}
              </Link>
            </h4>
          ))}
          <p className='link-career-section'>
            Didn&apos;t find what you were looking for?
            <LinksSection title={`LET'S TALK`} link='/contact' />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerSection;
