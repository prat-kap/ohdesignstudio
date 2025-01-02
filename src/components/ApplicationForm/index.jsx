import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import 'src/components/ApplicationForm/ApplicationForm.css';

const ApplicationForm = () => {
  const [applicationFormData, setApplicationFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    portfolio: '',
    linkedin: '',
    other_website: '',
    additional_info: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setApplicationFormData({
      ...applicationFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(applicationFormData);
  };

  return (
    <Container fluid className='application-section h-100'>
      <h4 className='application-form-heading'>SUBMIT YOUR APPLICATION</h4>
      <Form onSubmit={handleSubmit} className='application-form'>
        <Row className='application-section-row h-100'>
          <Col xs={6}>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormName'>
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type='text'
                  name='fullname'
                  value={applicationFormData.fullname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  name='email'
                  value={applicationFormData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormPhone'>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type='text'
                  name='phone'
                  value={applicationFormData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormCompany'>
                <Form.Label>Current Company</Form.Label>
                <Form.Control
                  type='text'
                  name='company'
                  value={applicationFormData.company}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
          </Col>
          <Col xs={6}>
            <h4 className='application-form-links'>LINKS</h4>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormPortfolio'>
                <Form.Label>Portfolio URL</Form.Label>
                <Form.Control
                  type='text'
                  name='portfolio'
                  value={applicationFormData.portfolio}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormLinkedin'>
                <Form.Label>Linkedin</Form.Label>
                <Form.Control
                  type='text'
                  name='linkedin'
                  value={applicationFormData.linkedin}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormWebsite'>
                <Form.Label>Other Website</Form.Label>
                <Form.Control
                  type='text'
                  name='other_website'
                  value={applicationFormData.other_website}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='application-form-fields'>
              <Form.Group controlId='applicationFormInfo'>
                <Form.Label>ADDITIONAL INFORMATION</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={2}
                  name='additional_info'
                  value={applicationFormData.additional_info}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Button
              variant='primary'
              type='submit'
              onClick={handleSubmit}
              className='application-submit-btn'
            >
              SUBMIT APPLICATION
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default ApplicationForm;
