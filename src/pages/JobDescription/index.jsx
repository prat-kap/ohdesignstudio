/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import JobDescriptionSection from 'src/components/JobDescriptionSection';
import Footer from 'src/components/Footer';

import 'src/pages/JobDescription/JobDescription.css';

const JobDescription = () => {
  const components = [
    <JobDescriptionSection id='jobdescription-section' page='jobdescription' />,
    <Footer id='jobdescription-footer' page='jobdescription' />,
  ];
  return <HorizontalContainer components={components} />;
};

export default JobDescription;
