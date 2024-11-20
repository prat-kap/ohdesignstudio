import { Container, Row, Col } from 'react-bootstrap';
import 'src/components/Clients/Clients.css';

// eslint-disable-next-line react/prop-types
const Clients = ({ columnCount = 7 }) => {
  const clientLogos = [
    'a',
    'b',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '2',
    '212',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
  ];
  const columns = Array.from({ length: columnCount }, (_, i) =>
    clientLogos.filter((_, index) => index % columnCount === i)
  );
  console.log(columns);
  return (
    <Container fluid className="clients-section h-100">
      <Row>
        <Col>
          <h1 className="clients-title">Clients</h1>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <div className="scrollable-container">
            <div className="logos-grid">
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="logos-column">
                  {column.map((logo, index) => (
                    <span key={`${colIndex}-${index}`}>{logo}</span>
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
