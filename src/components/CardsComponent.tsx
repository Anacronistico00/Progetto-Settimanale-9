import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from './CardComponent';

const CardsComponent = () => {
  return (
    <>
      <Container fluid className='newsContainer m-0 text-white'>
        <h2 className='fs-1 mt-4 '>Novità</h2>
        <hr />
      </Container>
      <Container fluid className='d-flex newsContainer'>
        <Row xs={2} lg={3}>
          <Col className='p-1'>
            <CardComponent
              src='src\assets\images\1a.png'
              description='Rilassati, al resto ci pensiamo noi. Ascolta Apple Music Chill'
            />
          </Col>
          <Col className='p-1'>
            <CardComponent
              src='src\assets\images\1b.png'
              description='Ecco la nuova casa della musica latina'
            />
          </Col>
          <Col className='p-1 d-none d-lg-block'>
            <CardComponent
              src='src\assets\images\1c.png'
              description='Le ultime novità in fatto di Club House'
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardsComponent;
