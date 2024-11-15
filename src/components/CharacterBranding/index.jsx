import { Container, Row, Col } from 'react-bootstrap';

const CharacterBranding = () => {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          {/* 95999a */}
          <Row>
            Character is a branding and design agency with studios in New York
            and San Francisco.
          </Row>
          <Row>
            Since Michael Ferdman founded Firstborn in 1997, we&apos;ve seen the
            digital landscape change dramatically. Our industry has transformed,
            our clients&apos; businesses and their challenges have become more
            complex, consumer behavior has shifted, and we, as a company, have
            evolved with those changes along with it.
          </Row>
          <Row>ABOUT US</Row>
        </Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export default CharacterBranding;
