/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import ContactSection from 'src/components/ContactSection';

import 'src/pages/Contact/Contact.css';

const Contact = () => {
  const components = [<ContactSection id='contact-page' page='contact' />];
  return <HorizontalContainer components={components} page='contact' />;
};

export default Contact;
