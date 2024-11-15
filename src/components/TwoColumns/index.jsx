import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const TwoColumns = (props) => {
  // eslint-disable-next-line react/prop-types
  const { column1, column2 } = props;
  return (
    <Container>
      <Row>
        <Col xs={8}>{column1}</Col>
        <Col xs={4}>{column2}</Col>
      </Row>
    </Container>
  );
};

export default TwoColumns;
