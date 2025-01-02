/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import ApplicationForm from 'src/components/ApplicationForm';
import Footer from 'src/components/Footer';

import 'src/pages/JobApplicationForm/JobApplicationForm.css';

const JobApplicationForm = () => {
  const components = [
    <ApplicationForm id='jobapplication-section' page='jobapplication' />,
    <Footer id='jobapplication-footer' page='jobapplication' />,
  ];
  return <HorizontalContainer components={components} page='jobapplication' />;
};

export default JobApplicationForm;
