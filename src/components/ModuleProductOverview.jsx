import PropTypes from "prop-types";

const ModuleProductOverview = ({ cartItems }) => {
  return (
    <div>
      <h2>Commande</h2>
      {cartItems && cartItems.map((item, index) => (
        <div key={index}>
          <p>Nom : {item.name}</p>
          <p>Quantité : {item.qty}</p>
          <p>Prix : {item.price}</p>
        </div>
      ))}
    </div>
  );
};

ModuleProductOverview.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      qty: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ModuleProductOverview;
