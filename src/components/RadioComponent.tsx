import { Card } from 'react-bootstrap'; // Importa il componente Card
interface RadioProps {
  src: string;
  description: string;
}
const RadioComponent = (props: RadioProps) => {
  return (
    <Card className='text-white border-0'>
      <Card.Body className='p-0'>
        <Card.Img variant='top' src={props.src} className='rounded-3' />
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RadioComponent;
