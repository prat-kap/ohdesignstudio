/* eslint-disable react/prop-types */
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import LinksSection from 'src/components/LinksSection';
import 'src/components/Reviews/Reviews.css';

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

const Reviews = (props) => {
  const { title, data } = props;
  return (
    <Container
      fluid
      className='review-section-wrapper h-100'
      id='review-section-wrapper'
    >
      <Row>
        <Col>
          <h1 className='review-section-title'>{title}</h1>
        </Col>
      </Row>
      <Row className='scrollable-card-container h-100'>
        <Col className='card-grid'>
          {data.map((item, index) => {
            return (
              <motion.div
                key={index}
                className='card-row'
                initial='rest'
                whileHover='hover'
                animate='rest'
                variants={cardAnimate}
              >
                <Card className='card-wrapper'>
                  <div className='card-heading'>
                    <motion.hr variants={lineMotion}></motion.hr>
                    <span className='card-index'>{`0${index + 1}`}</span>
                  </div>
                  <Card.Body className='card-container'>
                    <Card.Text className='card-description'>
                      {item.review}
                      <p className='review-author-name'>{item.author}</p>
                      <p className='review-company-name'>{item.company}</p>
                    </Card.Text>
                    <LinksSection title='' link='' />
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
