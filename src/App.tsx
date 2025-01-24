import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarComponent from './components/NavbarComponent';
import CardsComponent from './components/CardsComponent';
import RadioCardComponents from './components/RadioCardComponents';
import NewReleaseComponent from './components/NewReleasesComponent';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSectionComponent from './components/LeftSectionComponent';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <LeftSectionComponent />
        </Col>

        <Col md={10} className='p-0'>
          <div className='container-fluid p-0'>
            <header>
              <NavbarComponent />
            </header>
            <main className='px-2'>
              <CardsComponent />
              <RadioCardComponents />
              <NewReleaseComponent />
            </main>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
