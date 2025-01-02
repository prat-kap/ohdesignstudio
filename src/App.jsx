import { Routes, Route } from 'react-router-dom';

import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Careers from 'src/pages/Careers';
import JobDescription from 'src/pages/JobDescription';
import JobApplicationForm from 'src/pages/JobApplicationForm';
import Contact from 'src/pages/Contact';
import Work from 'src/pages/Work';
import 'src/App.css';

function App() {
  return (
    <div style={{ height: '100vh', padding: '1% 0 1% 1%' }}>
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
        <Route path='/portfolio' element={<Work />} />
        <Route path='/portfolio/*' element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
