/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import LandingPageBanner1 from 'src/assets/LandingPageBanner_1.jpg';
// import LandingPageBanner2 from 'src/assets/LandingPageBanner_2.jpg';
// import LandingPageBanner3 from 'src/assets/LandingPageBanner_3.jpg';

import 'src/components/HorizontalContainer/HorizontalContainer.css';

const HorizontalContainer = (props) => {
  // const {
  //   BannerImage,
  //   Branding,
  //   Capabilities,
  //   PortfolioGrid,
  //   Clients,
  //   CardsSection,
  //   RouterLinks,
  //   Footer,
  // } = props;
  const { components } = props;
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
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };
  console.log('test----', components);
  return (
    <Container
      fluid
      className='horizontal-container'
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* <Row className='scroll-row'>
        <Col className='scroll-item'>
          <BannerImage
            src={LandingPageBanner1}
            alt='Landing page banner 1- Create game changing brand'
          />
        </Col>
        <Col className='scroll-item'>
          <BannerImage
            src={LandingPageBanner2}
            alt='Landing page banner 2- Create game changing brand'
          />
        </Col>
        <Col className='scroll-item'>
          <BannerImage
            src={LandingPageBanner3}
            alt='Landing page banner 3- Create game changing brand'
          />
        </Col>
        <Col className='scroll-item' style={{ backgroundColor: '#fff500' }}>
          <Branding />
        </Col>
        <Col className='scroll-item' style={{ backgroundColor: '#fff500' }}>
          <Capabilities />
        </Col>
        <Col className='scroll-item'>
          <PortfolioGrid />
        </Col>
        <Col className='scroll-item'>
          <Clients />
        </Col>
        <Col className='scroll-item'>
          <CardsSection />
        </Col>
        <Col className='scroll-item'>
          <CardsSection />
        </Col>
        <Col className='scroll-item'>
          <RouterLinks />
        </Col>
        <Col className='scroll-item'>
          <Footer />
        </Col>
      </Row> */}
      <Row className='scroll-row'>
        {components.map((component) => {
          return (
            <Col
              className={`scroll-item-${component.props.page}`}
              key={component.props.id}
            >
              {component}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HorizontalContainer;
