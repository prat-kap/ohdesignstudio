import { Container, Row, Col } from 'react-bootstrap';
import CharacterBrandingBanner from 'src/assets/Character_branding.jpg';
import 'src/components/PortfolioGrid/PortfolioGrid.css';

const PortfolioGrid = () => {
    return (
      <Container fluid className='portfolio-section h-100 d-flex flex-column'>
        <Row className='h-50'>
          <Col md={4} className="portfolio-image p-0 h-100">
            <img src={CharacterBrandingBanner} alt="Apostrophe Design" className="img-fluid" />
          </Col>
          <Col md={4} className="portfolio-image p-0 h-100">
            <img src={CharacterBrandingBanner} alt="Product Design" className="img-fluid" />
          </Col>
          <Col md={4} className="portfolio-image p-0 h-100">
            <img src={CharacterBrandingBanner} alt="Packaging Design" className="img-fluid" />
          </Col>
        </Row>
        <Row className='h-50'>
          <Col md={4} className="portfolio-image p-0 h-100">
            <img src={CharacterBrandingBanner} alt="Packaging Design" className="img-fluid" />
          </Col>
          <Col md={4} className="portfolio-info p-0 h-100">
            <div className="">
                <p className="client-name">CLIENT NAME</p>
                WE CREATE <br /> GAME CHANGING BRANDS
            </div>
          </Col>
          <Col md={4} className="portfolio-description p-0 h-100">
            <h2>Portfolio to be discussed here</h2>
            <p>Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
            digital landscape change dramatically.</p>
            <a href="#" className='link-section'>VIEW ALL PROJECTS</a>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default PortfolioGrid;
  