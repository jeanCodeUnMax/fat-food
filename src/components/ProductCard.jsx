import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./css/ProductCard.css";

export default function ProductCard({ product, handleAddToCart }) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				className="imageProduct"
				variant="top"
				src={`./src/assets/${product.image}`}
			/>
			<Card.Body className="text-center">
				<Card.Title>{product.name}</Card.Title>
				<Card.Text>{product.description}</Card.Text>
				<Card.Text>{product.price} €</Card.Text>
				<Button variant="primary" onClick={() => handleAddToCart(product)}>
					{" "}
					Ajouter au panier
				</Button>
			</Card.Body>
		</Card>
	);
}

ProductCard.propTypes = {
	product: PropTypes.shape({
		category: PropTypes.string,
		description: PropTypes.string,
		price: PropTypes.number,
		name: PropTypes.string,
		image: PropTypes.string,
	}),
	stateCart: PropTypes.object,
	handleAddToCart: PropTypes.func,
};
