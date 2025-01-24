import { Button, Col, Container, Row } from 'react-bootstrap';
import VolumeSliderComponent from './VolumeSliderComponent';

const PlayerComponent = () => {
  return (
    <>
      <Container
        fluid
        className='player d-flex justify-content-between align-items-center d-md-none'
      >
        <img
          src='https://jammybeatz.beatstars.com/tpl/assets/img/placeholders/track-placeholder.svg'
          alt='Music placeholder'
        />
        <div className='text-secondary mx-3'>
          <i className='bi bi-play-fill'></i>
          <i className='bi bi-fast-forward-fill ms-3'></i>
        </div>
      </Container>
      <Container fluid className='playerMd d-none d-md-block bg-dark'>
        <Row>
          <Col
            md={3}
            className='text-secondary d-flex justify-content-between align-items-center px-5'
          >
            <i className='bi bi-shuffle'></i>
            <i className='bi bi-rewind-fill'></i>
            <i className='bi bi-play-fill'></i>
            <i className='bi bi-fast-forward-fill'></i>
            <i className='bi bi-repeat'></i>
          </Col>
          <Col className='bg-secondary text-center pt-2' md={5}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='24'
              version='1.1'
              viewBox='0 0 20 24'
              className='me-1'
              style={{ fill: 'white' }}
            >
              <path
                fillRule='nonzero'
                stroke='none'
                strokeWidth='1'
                d='M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z'
              ></path>
            </svg>
          </Col>
          <Col md={2} className='d-flex justify-content-center'>
            <VolumeSliderComponent />
          </Col>
          <Col
            md={2}
            className='d-flex justify-content-center align-items-center'
          >
            <Button
              variant='danger'
              className='playerButton d-flex  justify-content-center align-items-center'
            >
              <i className='bi bi-person-fill'></i>Accedi
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlayerComponent;
