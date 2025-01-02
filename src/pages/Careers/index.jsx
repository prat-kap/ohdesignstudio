/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import CareerSection from 'src/components/CareerSection';
import Footer from 'src/components/Footer';

import 'src/pages/Careers/Careers.css';

const Careers = () => {
  const components = [
    <CareerSection id='careers-roles' page='careers' />,
    <Footer id='careers-footer' page='careers' />,
  ];
  return <HorizontalContainer components={components} page='careers' />;
};

export default Careers;
