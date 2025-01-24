import { Card } from 'react-bootstrap'; // Importa il componente Card
interface CardProps {
  src: string;
  description: string;
}
const CardComponent = (props: CardProps) => {
  return (
    <Card className='text-white border-0'>
      <Card.Body className='P-0'>
        <Card.Text className='m-0'>NUOVA STAZIONE RADIO</Card.Text>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Img src={props.src} className='rounded-4 img-fluid' />
      </Card.Footer>
    </Card>
  );
};

export default CardComponent;
