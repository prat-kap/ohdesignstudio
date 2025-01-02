/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import Portfolio from 'src/components/Portfolio';
import Footer from 'src/components/Footer';

import 'src/pages/Work/Work.css';

const Work = () => {
  const components = [
    <Portfolio id='work-section' page='work' />,
    <Footer id='work-footer' page='work' />,
  ];
  return <HorizontalContainer components={components} page='work' />;
};

export default Work;
