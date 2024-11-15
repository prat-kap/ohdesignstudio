import { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import TextOnImage from './components/TextOnImage';
import CharacterBranding from './components/CharacterBranding';
import LandingPageBanner1 from './assets/LandingPageBanner_1.jpg';
import LandingPageBanner2 from './assets/LandingPageBanner_2.jpg';
import LandingPageBanner3 from './assets/LandingPageBanner_3.jpg';
import Capabilities from './components/Capabilities';

function App() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed with multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Container
        fluid
        className="horizontal-container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <Row className="scroll-row">
          <Col className="scroll-item">
            <TextOnImage
              src={LandingPageBanner1}
              alt="Landing page banner 1- Create game changing brand"
            />
          </Col>
          <Col className="scroll-item">
            <TextOnImage
              src={LandingPageBanner2}
              alt="Landing page banner 2- Create game changing brand"
            />
          </Col>
          <Col className="scroll-item">
            <TextOnImage
              src={LandingPageBanner3}
              alt="Landing page banner 3- Create game changing brand"
            />
          </Col>
          <Col className="scroll-item" style={{ backgroundColor: '#fff500' }}>
            <CharacterBranding />
          </Col>
          <Col className="scroll-item" style={{ backgroundColor: '#fff500' }}>
            <Capabilities />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
