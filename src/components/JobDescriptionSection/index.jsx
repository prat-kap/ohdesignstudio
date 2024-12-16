import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import LinksSection from 'src/components/LinksSection';
import 'src/components/JobDescriptionSection/JobDescriptionSection.css';

import { getRole } from 'src/components/JobDescriptionSection/helper.js';

const JobDescriptionSection = () => {
  const { roleName } = useParams();
  const role = getRole(roleName);

  return (
    <Container fluid className='jobdescription-section h-100'>
      <Row className='jobdescription-section-row h-100'>
        <Col xs={4} className='jobdescription-section-text h-100'>
          <h2 className='jobdescription-heading'>{roleName}</h2>
          <ul className='jobdescription-subheading'>
            {role.subpoints.map((sub) => (
              <li key={Math.floor(Math.random() * 100)}>{sub}</li>
            ))}
          </ul>
        </Col>
        <Col xs={4} className='jobdescription-section-intro h-100'>
          <p className='jobdescription-section-details'>{role.details}</p>

          <h4 className='jobdescription-keyduties'>Key Duties:</h4>
          <ul className='jobdescription-duties-list'>
            {role.key_duties.map((duty) => (
              <li key={Math.floor(Math.random() * 100)}>{duty}</li>
            ))}
          </ul>
        </Col>
        <Col xs={4} className='jobdescription-section-musthave h-100'>
          <h4 className='jobdescription-tohave'>Good to Have:</h4>
          <ul className='jobdescription-tohave-list'>
            {role.good_to_have.map((tohave_item) => (
              <li key={Math.floor(Math.random() * 100)}>{tohave_item}</li>
            ))}
          </ul>
          <p className='link-career-section'>
            <LinksSection title='APPLY' link='apply' />
          </p>
          {/* <Button variant='primary' type='submit' onClick={handleSubmit}>
            APPLY
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
};

export default JobDescriptionSection;
