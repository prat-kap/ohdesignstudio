/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import ApplicationForm from 'src/components/ApplicationForm';
import Footer from 'src/components/Footer';

import 'src/pages/JobApplicationForm/JobApplicationForm.css';

const JobApplicationForm = () => {
  const components = [
    <ApplicationForm id='jobdescription-section' page='jobdescription' />,
    <Footer id='jobdescription-footer' page='jobdescription' />,
  ];
  return <HorizontalContainer components={components} />;
};

export default JobApplicationForm;
