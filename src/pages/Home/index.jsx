/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import BannerImage from 'src/components/BannerImage';
import Branding from 'src/components/Branding';
import Capabilities from 'src/components/Capabilities';
import PortfolioGrid from 'src/components/PortfolioGrid';
import Clients from 'src/components/Clients';
import CardsSection from 'src/components/CardsSection';
import RouterLinks from 'src/components/RouterLinks';
import Footer from 'src/components/Footer';

import LandingPageBanner1 from 'src/assets/LandingPageBanner_1.jpg';
import LandingPageBanner2 from 'src/assets/LandingPageBanner_2.jpg';
import LandingPageBanner3 from 'src/assets/LandingPageBanner_3.jpg';

import 'src/pages/Home/Home.css';

const Home = () => {
  const components = [
    <BannerImage
      src={LandingPageBanner1}
      alt='Landing page banner 1- Create game changing brand'
      id='home-banner1'
      page='home'
    />,
    <BannerImage
      src={LandingPageBanner2}
      alt='Landing page banner 2- Create game changing brand'
      id='home-banner2'
      page='home'
    />,
    <BannerImage
      src={LandingPageBanner3}
      alt='Landing page banner 3- Create game changing brand'
      id='home-banner3'
      page='home'
    />,
    <Branding id='home-branding' page='home' />,
    <Capabilities id='home-capabilities' page='home' />,
    <PortfolioGrid id='home-portfolio' page='home' />,
    <Clients id='home-clients' page='home' />,
    <CardsSection id='home-news' page='home' />,
    <CardsSection id='home-thoughts' page='home' />,
    <RouterLinks id='home-routing' page='home' />,
    <Footer id='home-footer' page='home' />,
  ];
  return (
    // <HorizontalContainer
    //   BannerImage={BannerImage}
    //   Branding={Branding}
    //   Capabilities={Capabilities}
    //   PortfolioGrid={PortfolioGrid}
    //   Clients={Clients}
    //   CardsSection={CardsSection}
    //   RouterLinks={RouterLinks}
    //   Footer={Footer}
    // />
    <HorizontalContainer components={components} />
  );
};

export default Home;
