/* eslint-disable react/jsx-key */
import HorizontalContainer from 'src/components/HorizontalContainer';
import Capabilities from 'src/components/Capabilities';
import Clients from 'src/components/Clients';
import Branding from 'src/components/Branding';
import Footer from 'src/components/Footer';

import 'src/pages/About/About.css';

const About = () => {
  const components = [
    <Branding id='about-branding' page='about' />,
    <Capabilities id='about-capabilities' page='about' />,
    <Clients id='home-clients' page='about' />,
    <Footer id='home-footer' page='about' />,
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

export default About;
