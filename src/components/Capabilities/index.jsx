import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import 'src/components/Capabilities/Capabilities.css';

import { capabilitiesList, headings } from 'src/data/constants';

const lineMotion = {
  rest: {
    opacity: 0,
    x: '-3vw',
    display: 'none',
    type: 'tween',
  },
  hover: {
    opacity: 1,
    x: '-3vw',
    display: 'inline-block',
    transition: {
      type: 'tween',
    },
  },
};

const textMotion = {
  rest: {
    x: 0,
  },
  hover: {
    x: '-3vw',
    originX: 0,
    scale: 1.1,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const Capabilities = () => {
  const [capabilityContent, setCapabilityContent] = useState(
    capabilitiesList[0].content
  );

  const setCapability = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const filteredCapabilityList = capabilitiesList.filter(
      (item) => item.title === event.target.textContent
    );
    setCapabilityContent(filteredCapabilityList[0].content);
  };

  return (
    <Container fluid className='capabilities h-100'>
      <Row className='capabilities-row h-100'>
        <Col xs={1} className='heading-capabilities-section'>
          <h2 className='capabilities-heading'>{headings.Capabilities}</h2>
        </Col>
        <Col xs={8} className='lists-capabilities-section'>
          <ul className='lists-capabilities-wrapper'>
            {capabilitiesList.map(({ id, title }) => (
              <motion.li
                key={id}
                data-key={id}
                initial='rest'
                whileHover='hover'
                animate='rest'
                onClick={() => setCapability(event)}
              >
                <motion.div className='lists-id' variants={textMotion}>
                  {id}
                </motion.div>
                <motion.hr variants={lineMotion}></motion.hr>
                <motion.div className='lists-title' variants={textMotion}>
                  {title}
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </Col>
        <Col xs={3} className='capabilities-intro'>
          {capabilityContent}
        </Col>
      </Row>
    </Container>
  );
};

export default Capabilities;
