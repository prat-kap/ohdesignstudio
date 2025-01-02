import { Container } from 'react-bootstrap';

import LinksSection from 'src/components/LinksSection';
import ClientHeading from 'src/components/ClientHeading';
import DotIndicator from 'src/components/DotIndicator';

import 'src/components/BannerImage/BannerImage.css';

const BannerImage = (props) => {
  // eslint-disable-next-line react/prop-types
  const { src, alt } = props;
  return (
    <Container fluid className='image-container'>
      <img src={src} alt={alt} className='image' />
      <div className='overlay-text'>
        <ClientHeading />
        <p className='link-section'>
          <LinksSection title='GO TO PROJECT' link='/portfolio' />
        </p>
      </div>
      <DotIndicator />
    </Container>
  );
};

export default BannerImage;
