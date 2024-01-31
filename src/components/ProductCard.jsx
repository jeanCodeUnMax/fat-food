import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './ProductCard.css';

export default function ProductCard(props) {
  const { name, qty, price, addToCart, description, image } = props;
  console.log("render productCard");

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        className='imageProduct'
        variant='top'
        src={`./src/assets/${image}`}
      />
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(name, qty, price)}>
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}

// Define PropTypes for the individual props
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
