import 'src/App.css';

import HorizontalContainer from 'src/components/HorizontalContainer';
import BannerImage from 'src/components/BannerImage';
import Branding from 'src/components/Branding';
import Capabilities from 'src/components/Capabilities';
import PortfolioGrid from 'src/components/PortfolioGrid';
import Clients from 'src/components/Clients';
import CardsSection from 'src/components/CardsSection';

function App() {
  return (
    <div style={{ height: '100vh', padding: '3% 0 3% 3%' }}>
        <HorizontalContainer BannerImage={BannerImage} Branding={Branding} 
        Capabilities={Capabilities} PortfolioGrid={PortfolioGrid} Clients={Clients}
        CardsSection={CardsSection} />
    </div>
  );
}

export default App;
