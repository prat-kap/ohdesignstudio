import { Container, Row, Col } from 'react-bootstrap';

import LinksSection from 'src/components/LinksSection';
import 'src/components/RouterLinks/RouterLinks.css';

const RouterLinks = () => {
  return (
    <Container fluid className='router-links h-100'>
      <Row className='router-links-row h-100'>
        <Col className='router-links-lists'>
          <ul className='router-links-lists-wrapper'>
            <li className='router-links-items'>
              <LinksSection title='Us.' link='/about' />
            </li>
            <li className='router-links-items'>
              <LinksSection title='Work.' link='/project' />
            </li>
            <li className='router-links-items'>
              <LinksSection title='Thoughts.' link='/thoughts' />
            </li>
            <li className='router-links-items'>
              <LinksSection title='Careers.' link='/careers' />
            </li>
            <li className='router-links-items'>
              <LinksSection title='Contact.' link='/contact' />
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default RouterLinks;
