import React from 'react';
import People from './Components/People';
import Planet from './Components/Planet';
import Vehicle from './Components/Vehicle';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <>
    <Container>
    <Row>
     <Col className="mb-4" xs={12} className="d-flex flex-wrap">
      <People peopleId="2"/>
      <Planet planetId="2"/>
      <Vehicle vehicleId="4"/>
      </Col>
      </Row>
      </Container>
    </>
  );
}

export default App;
