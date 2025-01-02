/* eslint-disable react/prop-types */
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import 'src/components/CardsSection/CardsSection.css';

const lineMotion = {
  rest: {
    opacity: 0,
    duration: 0.1,
    display: 'none',
    type: 'tween',
  },
  hover: {
    opacity: 1,
    duration: 0.1,
    display: 'inline-block',
    transition: {
      type: 'tween',
    },
  },
};

const cardAnimate = {
  rest: {
    x: 0,
  },
  hover: {
    x: 0,
    originX: 0,
    scale: 1.02,
    boxShadow: '2px 4px 12px #00000014',
    borderRadius: '10px',
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const CardsSection = (props) => {
  const { title, data } = props;
  return (
    <Container fluid className='card-section-wrapper h-100 d-flex flex-column'>
      <Row>
        <Col>
          <h1 className='card-section-title'>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={11}>
          <div className='scrollable-card-container'>
            <Row className='card-grid'>
              {data.map((item, index) => {
                return (
                  index % 3 === 0 && (
                    <div className='d-flex mb-3 card-parent' key={index}>
                      {data
                        .slice(index, index + 3)
                        .map((cardItem, cardIndex) => (
                          <motion.div
                            key={cardIndex}
                            className='card-row'
                            initial='rest'
                            whileHover='hover'
                            animate='rest'
                            variants={cardAnimate}
                          >
                            <Card className='card-wrapper'>
                              <div className='card-heading'>
                                <motion.hr variants={lineMotion}></motion.hr>
                                <span className='card-index'>{`0${
                                  cardIndex + index + 1
                                }`}</span>
                              </div>
                              {cardItem.image && (
                                <Card.Img
                                  variant='top'
                                  src={cardItem.image}
                                  alt='News Image'
                                />
                              )}
                              <Card.Body className='card-container'>
                                <Card.Title className='card-title-heading'>
                                  {cardItem.title}
                                </Card.Title>
                                <Card.Text className='card-description'>
                                  {cardItem.description}
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  )
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsSection;
