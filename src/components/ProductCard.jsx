import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './ProductCard.css';

export default function ProductCard(props) {
  const { product } = props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        className='imageProduct'
        variant='top'
        src={`./src/assets/${product.image}`}
      />
      <Card.Body className='text-center'>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button variant='primary'>Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
}

// définir les types
ProductCard.propTypes = {
  product: PropTypes.exact({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
