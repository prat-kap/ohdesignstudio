import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import LinksSection from 'src/components/LinksSection';
import 'src/components/ContactSection/ContactSection.css';

const ContactSection = () => {
  const [contactFormData, setContactFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactFormData);
  };

  return (
    <Container fluid className='contact-section h-100'>
      <Row className='contact-section-row h-100'>
        <Col xs={4} className='contact-section-text h-100'>
          <h2 className='contact-heading'>Lets Talk</h2>
          <p className='contact-intro'>
            We are always happy to make valuable new contacts and are looking
            forward to receiving your mail or call. Even if you&apos;re not sure
            we&apos;ll be the right ones for your project. We&apos;re always
            open to a chat and will be happy to help - of course also in person,
            wherever you are.
          </p>
        </Col>
        <Col xs={4} className='contact-section-form h-100'>
          <Form onSubmit={handleSubmit} className='contact-form'>
            <Row className='contact-form-fields'>
              <Form.Group controlId='formName'>
                <Form.Label>Full name</Form.Label>
                <Form.Control
                  type='text'
                  name='fullname'
                  value={contactFormData.fullname}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='contact-form-fields'>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='text'
                  name='email'
                  value={contactFormData.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='contact-form-fields'>
              <Form.Group controlId='formPhone'>
                <Form.Label>Phone No.</Form.Label>
                <Form.Control
                  type='text'
                  name='phone'
                  value={contactFormData.phone}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Row className='contact-form-fields'>
              <Form.Group controlId='formMessage'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={2}
                  name='message'
                  value={contactFormData.message}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>
            <Button
              variant='primary'
              type='submit'
              onClick={handleSubmit}
              className='contact-submit-btn'
            >
              SEND
            </Button>
          </Form>
        </Col>
        <Col xs={4} className='contact-section-footer h-100'>
          <Row>
            <h4 className='contact-footer-items-heading'>Address:</h4>
            <p className='contact-footer-address-text'>
              402, Makani Center, <br />
              35th Linking Road, <br />
              Bandra (W), 400050.
            </p>
          </Row>
          <Row>
            <h4 className='contact-footer-items-heading'>Phone:</h4>
            <p className='contact-footer-phone'>+91 26616280</p>
          </Row>
          <Row>
            <h4 className='contact-footer-items-heading'>Email:</h4>
            <p className='contact-footer-email'>letstalk@ohdesignstudio.com</p>
          </Row>
          <Row>
            <h4 className='contact-footer-items-heading'>Find Us:</h4>
            <p className='contact-footer-map'>Google Map</p>
          </Row>
          <Row>
            <h4 className='contact-footer-items-heading'>Careers:</h4>
            <p className='contact-footer-careers-text'>
              <LinksSection title='View openings' link='/careers' />
            </p>
          </Row>
          <Row>
            <h4 className='contact-footer-items-heading'>Follow:</h4>
            <p className='contact-socail-media-images'></p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;
