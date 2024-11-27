import { Container, Row, Col } from 'react-bootstrap';
import ClientLogo from 'src/assets/logo_white.png';
import 'src/components/Clients/Clients.css';

// eslint-disable-next-line react/prop-types
const Clients = ({ columnCount = 4 }) => {
  const clientLogos = [
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
    ClientLogo,
  ];
  // const logosLength = clientLogos.length
  const columns = Array.from({ length: columnCount }, (_, i) =>
    clientLogos.filter((_, index) => index % columnCount === i)
  );
  console.log(columns);
  return (
    <Container fluid className='clients-section h-100'>
      <Row>
        <Col>
          <h1 className='clients-title'>Clients</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col xs={11}>
          <div className='scrollable-clients-container'>
            <div className='logos-grid'>
              {columns.map((column, colIndex) => (
                <div key={colIndex} className='logos-column'>
                  {column.map((logo, index) => (
                    <img
                      key={`${colIndex}-${index}`}
                      className='client-logo'
                      src={logo}
                      alt='Client Logo'
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Clients;
