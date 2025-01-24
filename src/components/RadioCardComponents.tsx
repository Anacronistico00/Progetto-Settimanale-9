import { Col, Container, Row } from 'react-bootstrap';
import RadioComponent from './RadioComponent';

const RadioCardComponents = () => {
  return (
    <>
      <Container fluid className='newsContainer m-0 text-white'>
        <h2 className='fs-4 mt-4 '>
          Nuovi Episodi Radio
          <i className='bi bi-chevron-right fs-6 ms-2'></i>
        </h2>
      </Container>
      <Container fluid className='d-flex newsContainer'>
        <Row xs={3} md={4} lg={5} xl={6}>
          <Col className='p-1'>
            <RadioComponent
              src='src\assets\images\2a.png'
              description='Prologo con Abuelo'
            />
          </Col>
          <Col className='p-1'>
            <RadioComponent
              src='src\assets\images\2b.png'
              description='The Wanderer'
            />
          </Col>
          <Col className='p-1'>
            <RadioComponent
              src='src\assets\images\2c.png'
              description='Michael Bublè & Carly Pearce & Zane Lowe'
            />
          </Col>
          <Col className='p-1 d-none d-md-block'>
            <RadioComponent
              src='src\assets\images\2d.png'
              description='Stephan Moccio: The Zane Lowe Interview'
            />
          </Col>
          <Col className='p-1 d-none d-lg-block'>
            <RadioComponent
              src='src\assets\images\2e.png'
              description='Chart Spotlight: Julia Michaels'
            />
          </Col>
          <Col className='p-1 d-none d-xl-block'>
            <RadioComponent
              src='src\assets\images\2f.png'
              description='Interview: Karri & Travis Mills'
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RadioCardComponents;
