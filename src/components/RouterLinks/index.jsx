/* eslint-disable react/prop-types */
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

import LinksSection from 'src/components/LinksSection';
import 'src/components/RouterLinks/RouterLinks.css';

const RouterLinks = (props) => {
  const { data, page, setActiveTab } = props;
  return (
    <Container fluid className='router-links h-100' id='router-links'>
      <Row className='router-links-row h-100'>
        <Col className='router-links-lists'>
          <ul className='router-links-lists-wrapper'>
            {data.map(({ id, title, link }) => (
              <motion.li
                className='router-links-items'
                key={id}
                whileHover={{
                  backgroundColor: '#fff500',
                  scale: 1.1,
                  originX: 0,
                }}
                transition={{
                  type: 'tween',
                  stiffness: 300,
                  ease: 'easeInOut',
                }}
                onClick={() =>
                  page === 'filter-page' ? setActiveTab('work-page') : null
                }
              >
                <LinksSection title={title} link={link} arrow='false' />
              </motion.li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default RouterLinks;
