import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <Container className=' m-0 mt-4 pt-3 px-3 text-white pb-5 mb-5'>
      <div className='d-flex'>
        <p className='text-white pe-2'>Italia</p>
        <p className='text-secondary border-start px-2'>English (UK)</p>
      </div>
      <div>
        <p className='text-secondary'>
          Copyright &copy; 2024
          <span className='text-white'> Apple Inc.</span> Tutti i diritti
          riservati.
        </p>
      </div>
      <div className='d-flex flex-wrap'>
        <p className='border-end pe-2'>Condizione dei servizi internet</p>
        <p className='ps-2 border-end pe-2'>Apple Music & privacy</p>
        <p className='ps-2 border-end pe-2'>Avviso sui cookie</p>
        <p className='ps-2 border-end pe-2'>Supporto</p>
        <p className='ps-2 pe-2'>Feedback</p>
      </div>
    </Container>
  );
};

export default FooterComponent;
