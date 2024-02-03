import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import './ProductCard.css';
// const arrayCart=[]
export default function ProductCard({product, setCart}) {

  
  // function handleAddToCart(product) {

  //   arrayCart.push(product)
  //   // const arrayCart = [...arrayCart,product]
  //   setCart(arrayCart) 
  // }
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
        {/* <Button variant='primary' onClick={()=>handleAddToCart(product)}> Ajouter au panier</Button> */}
        <Button variant='primary' onClick={()=>setCart(product)}> Ajouter au panier</Button>
      </Card.Body>
    </Card>
  );
}

// définir les types
ProductCard.propTypes = {
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  stateCart: PropTypes.object.isRequired,
};