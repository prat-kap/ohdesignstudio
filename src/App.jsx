// import { Routes, Route, Switch } from 'react-router-dom';

import HorizontalContainer from 'src/components/HorizontalContainer';
import BannerImage from 'src/components/BannerImage';
import Branding from 'src/components/Branding';
import Capabilities from 'src/components/Capabilities';
import PortfolioGrid from 'src/components/PortfolioGrid';
import Clients from 'src/components/Clients';
import CardsSection from 'src/components/CardsSection';
import RouterLinks from 'src/components/RouterLinks';
import Footer from 'src/components/Footer';
import 'src/App.css';

function App() {
  return (
    <div style={{ height: '100vh', padding: '3% 0 3% 3%' }}>
      {/* <Routes>
        <Route path="/" Component={Home} />
        <Route path="/careers" Component={Careers} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={AboutUs} />
      </Routes> */}
      <HorizontalContainer
        BannerImage={BannerImage}
        Branding={Branding}
        Capabilities={Capabilities}
        PortfolioGrid={PortfolioGrid}
        Clients={Clients}
        CardsSection={CardsSection}
        RouterLinks={RouterLinks}
        Footer={Footer}
      />
    </div>
  );
}

export default App;
