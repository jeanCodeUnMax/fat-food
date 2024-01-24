/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import productUrl from "./../assets/boisson-chaude_1.jpg";

 


export default function ProductCard(props){


const { product } = props; 


console.log(product.image)

return (

    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={product.image} /> */}
      <Card.Img variant="top" src={productUrl} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.price}
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
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
  }).isRequired
}
