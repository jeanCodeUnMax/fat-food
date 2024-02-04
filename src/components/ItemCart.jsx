import PropTypes from "prop-types";
import "./ItemCart.css";

const ItemCart = ({ product, qty, updateQty }) => {
	const handleDecrease = () => {
		updateQty(product, qty - 1);
	};

	const handleIncrease = () => {
		updateQty(product, qty + 1);
	};

	return (
		<div className="product-wrapper">
			<p className="product-name fw-bold mb-1">{product.name}</p>
			<div className="product-description">
				<p className="product-description-value">{product.description}</p>
				<p className="product-price">{product.price} €</p>

				<div className="btns-wrapper">
					<button className="btn-remove-item" onClick={handleDecrease}>
						-
					</button>
					<p className="qty-item-order">{qty}</p>
					<button className="btn-add-item" onClick={handleIncrease}>
						+
					</button>
				</div>
				<hr />
			</div>
		</div>
	);
};

ItemCart.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		price: PropTypes.number,
	}),
	qty: PropTypes.number,
	updateQty: PropTypes.func,
};

export default ItemCart;
