import { Container, Row, Col, Card } from 'react-bootstrap';
import CharacterBrandingBanner from 'src/assets/Character_branding.jpg';
import 'src/components/CardsSection/CardsSection.css';

const CardsSection = () => {
  const newsData = [
    {
      image: CharacterBrandingBanner,
      title: 'Branding & Design blog',
      description:
        "Since Michael Ferdman founded Firstborn in 1997, we've seen the digital landscape change dramatically.",
    },
    {
      image: CharacterBrandingBanner,
      title: 'Branding & Design blog',
      description:
        'Our industry has evolved, and we continue to explore new trends and insights in the design world.',
    },
    {
      image: CharacterBrandingBanner,
      title: 'Branding & Design blog',
      description:
        'As technology advances, so does the way we approach branding and design, impacting how brands engage with audiences.',
    },
  ];
  return (
    <Container fluid className='card-section-wrapper h-100'>
      <Row>
        <Col>
          <h1 className='card-section-title'>News</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={11}>
          <div className='scrollable-card-container'>
            <div className='card-grid'>
              {newsData.map((item, index) => (
                <Card key={index} className='card-wrapper'>
                  <div className='card-heading'>
                    <span className='card-index'>{`0${index + 1}`}</span>
                  </div>
                  <Card.Img variant='top' src={item.image} alt='News Image' />
                  <Card.Body className='card-container'>
                    <Card.Title className='card-title-heading'>
                      {item.title}
                    </Card.Title>
                    <Card.Text className='card-description'>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsSection;
