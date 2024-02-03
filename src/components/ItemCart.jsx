import PropTypes from "prop-types";
import './ItemCart.css'
const ItemCart = ({ product, qty }) => {
  const handleDecrease = () => {
    // Fonction pour diminuer la quantité du produit dans le panier
  };

  const handleIncrease = () => {
    // Fonction pour augmenter la quantité du produit dans le panier
  };

  return (
    
    <div className="product-wrapper">
      <p className="product-name fw-bold mb-1">{product.name}</p>
      <div className="product-description">
        <p className="product-description-value">{product.description}</p>
        <p className="product-price">{product.price} €</p>

        <div className="btns-wrapper">
        <button className="btn-remove-item" onClick={handleDecrease}>-</button>
        <p className="qty-item-order">{qty}55</p> 
        <button className="btn-add-item" onClick={handleIncrease}>+</button>
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
  qty: PropTypes.number
};

export default ItemCart;
