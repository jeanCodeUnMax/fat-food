import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import "./css/ProductCard.css";
import { useRecoilState } from "recoil";
import { cartProductState } from "../store";

export default function ProductCard({ product, }) {

	const [cart, setCart] = useRecoilState(cartProductState);

function handleAddToCart(productArgument) {
	const index = cart.findIndex((item) => item.product.id === productArgument.id);

	if (index === -1) {
		setCart((prev) => [...prev, { product: productArgument, qty: 1 }]);
	} else {
		
		const updatedCart = JSON.parse(JSON.stringify(cart));
		updatedCart[index].qty = updatedCart[index].qty + 1;
		setCart(updatedCart);
	}
	}

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
