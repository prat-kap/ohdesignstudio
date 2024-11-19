import { Container, Row } from 'react-bootstrap';
import 'src/components/BannerImage/BannerImage.css';

const TextOnImage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { src, alt } = props;
  return (
    <Container fluid className="image-container">
      <img src={src} alt={alt} className="image" />
      <Row className="overlay-text">
        <Row className="client-name">CLIENT NAME</Row>
        WE CREATE <br /> GAME CHANGING BRANDS
      </Row>
    </Container>
  );
};

export default TextOnImage;
