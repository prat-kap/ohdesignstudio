import { Routes, Route } from 'react-router-dom';

import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Careers from 'src/pages/Careers';
import JobDescription from 'src/pages/JobDescription';
import JobApplicationForm from 'src/pages/JobApplicationForm';
import Contact from 'src/pages/Contact';
import 'src/App.css';

function App() {
  return (
    <div style={{ height: '100vh', padding: '3% 0 3% 3%' }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/careers/:roleName' element={<JobDescription />} />
        <Route
          path='/careers/:roleName/:apply'
          element={<JobApplicationForm />}
        />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
