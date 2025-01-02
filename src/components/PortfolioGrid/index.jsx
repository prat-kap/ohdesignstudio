import { Container, Row, Col } from 'react-bootstrap';

import ClientHeading from 'src/components/ClientHeading';
import LinksSection from 'src/components/LinksSection';
import CharacterBrandingBanner from 'src/assets/Character_branding.jpg';
import 'src/components/PortfolioGrid/PortfolioGrid.css';

const PortfolioGrid = () => {
  return (
    <Container fluid className='portfolio-section h-100 d-flex flex-column'>
      <Row className='h-50'>
        <Col md={4} className='portfolio-image p-0 h-100'>
          <img
            src={CharacterBrandingBanner}
            alt='Apostrophe Design'
            className='img-fluid'
          />
        </Col>
        <Col md={4} className='portfolio-image p-0 h-100'>
          <img
            src={CharacterBrandingBanner}
            alt='Product Design'
            className='img-fluid'
          />
        </Col>
        <Col md={4} className='portfolio-image p-0 h-100'>
          <img
            src={CharacterBrandingBanner}
            alt='Packaging Design'
            className='img-fluid'
          />
        </Col>
      </Row>
      <Row className='h-50'>
        <Col md={4} className='portfolio-image p-0 h-100'>
          <img
            src={CharacterBrandingBanner}
            alt='Packaging Design'
            className='img-fluid'
          />
        </Col>
        <Col md={4} className='portfolio-info h-100'>
          <ClientHeading />
          <p className='portfolio-subheading'>BRAND IDENTITY + SPACE DESIGN</p>
        </Col>
        <Col md={4} className='portfolio-description h-100'>
          <h2 className='portfolio-intro'>Portfolio to be discussed here</h2>
          <p className='portfolio-subtext'>
            Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
            digital landscape change dramatically.
          </p>
          <p className='link-portfolio-section'>
            <LinksSection title='VIEW ALL PROJECTS' link='/portfolio' />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioGrid;
