import { Col, Container, Row } from 'react-bootstrap';
import SingleCategory from './SingleCategory';

type Category = {
  name: string; // Definiamo il tipo dell'oggetto
};

const categories: Category[] = [
  { name: 'Esplora per genere' },
  { name: 'Decenni' },
  { name: "Attività e stati d'animo" },
  { name: 'WorldWide' },
  { name: 'Classifiche' },
  { name: 'Audio spaziale' },
  { name: 'Video musicali' },
  { name: 'Nuovi artisti' },
  { name: 'Hit del passato' },
];

const ExploresComponent = () => {
  return (
    <section>
      <Container fluid className='newsContainer m-0 text-white'>
        <h2 className='fs-4 mt-4 '>Altro da esplorare</h2>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={4} className=' text-danger'>
            {categories.slice(0, 3).map((category) => {
              return <SingleCategory name={category.name} />;
            })}
          </Col>
          <Col xs={12} md={4} className=' text-danger'>
            {categories.slice(3, 6).map((category) => {
              return <SingleCategory name={category.name} />;
            })}
          </Col>
          <Col xs={12} md={4} className=' text-danger'>
            {categories.slice(6, 9).map((category) => {
              return <SingleCategory name={category.name} />;
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploresComponent;
