import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArtistResponse } from '../types/ArtistResponse';
import SingleReleaseComponent from './SingleReleaseComponent';

const NewRereaseComponent = () => {
  const [songs, setSongs] = useState<ArtistResponse[]>([]);
  const fetchArtist = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=Gemitaiz'
      );
      if (!response.ok) {
        throw new Error('Errore nel recupero dati API');
      }
      const data = await response.json();
      setSongs(data.data.slice(0, 12));
    } catch (error) {
      console.log('Error', error);
    }
  };

  useEffect(() => {
    fetchArtist();
  }, []);

  return (
    <>
      <Container fluid className='newsContainer m-0 text-white'>
        <h2 className='fs-4 mt-4 '>
          Nuove Uscite
          <i className='bi bi-chevron-right fs-6 ms-2'></i>
        </h2>
      </Container>
      <Container fluid className='d-flex newsContainer'>
        <Row xs={3} md={4} xl={6}>
          {songs.map((song) => {
            return (
              <Col key={song.id} className='p-1'>
                <SingleReleaseComponent song={song} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default NewRereaseComponent;
