import { Card } from 'react-bootstrap';
import { ArtistResponse } from '../types/ArtistResponse';

interface SingleProps {
  song: ArtistResponse;
}

const SingleReleaseComponent = (props: SingleProps) => {
  return (
    <Card className='text-white border-0'>
      <Card.Body className='p-0'>
        <Card.Img
          src={props.song.album.cover_xl}
          className='rounded-4 img-fluid'
        />
        <Card.Text className='d-flex justify-content-between'>
          {props.song.title} <i className='bi bi-explicit-fill'></i>
        </Card.Text>
        <Card.Text>{props.song.artist.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleReleaseComponent;
