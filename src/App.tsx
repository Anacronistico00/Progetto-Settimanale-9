import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarComponent from './components/NavbarComponent';
import CardsComponent from './components/CardsComponent';
import RadioCardComponents from './components/RadioCardComponents';
import NewReleaseComponent from './components/NewReleasesComponent';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSectionComponent from './components/LeftSectionComponent';
import ExploresComponent from './components/ExploresComponent';
import FooterComponent from './components/FooterComponent';
import PlayerComponent from './components/PlayerComponent';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className='p-0 border-end border-dark'>
          <LeftSectionComponent />
        </Col>

        <Col md={10} className='p-0'>
          <div className='container-fluid p-0'>
            <PlayerComponent />
            <header>
              <NavbarComponent />
            </header>
            <main className='px-2'>
              <CardsComponent />
              <RadioCardComponents />
              <NewReleaseComponent />
              <ExploresComponent />
            </main>
            <footer className='bg-dark'>
              <FooterComponent />
            </footer>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
