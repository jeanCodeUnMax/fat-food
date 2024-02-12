import { propTypes } from "react-bootstrap/esm/Image";
import "./css/CommandOverview.css";
import ItemCart from "./ItemCart";
import PropTypes from "prop-types";
import { useRecoilValue} from "recoil";
import { cartProductState } from "../store";

const CommandOverview = () => {
	console.log("render commandHoverview");
	
	const cart = useRecoilValue(cartProductState);
	const totalCommand = cart.reduce((accu, item) => {
		return accu + parseFloat(item.product.price) * item.qty;
	}, 0);
	
	

	return (
		<div className="command-overview-container">
			<div className="command-overview-container__top text-left">
				<p className="h3 text-uppercase fw-bold">
					<i className="bi bi-card-list me-2"></i>allergène
				</p>
			</div>
			<div className="command-overview-container__main">
				<div className="command-overview-container__main-header ps-2">
					<i className="bi bi-dash-square me-2"></i>
					<span className="h3 fw-bold">VOTRE COMMANDE</span>
				</div>
				<div className="command-overview-container__main-content px-4 py-4 ">
					{cart.map((item) => (
						<ItemCart
							key={item.product.id}
							product={item.product}
							qty={item.qty}
					
						/>
					))}
				</div>
				<div className="command-overview-container__navigate-btns mb-3">
					<button>
						<i className="bi bi-caret-down-fill"></i>
					</button>
					<button className="inactive">
						<i className="bi bi-caret-up-fill"></i>
					</button>
				</div>
				<div className="command-overview-container__total d-flex justify-content-between px-2">
					<p className="h3 text-uppercase fw-bold my-2">total</p>
					<p className="h3 text-uppercase fw-bold my-2">{totalCommand}€</p>
				</div>
			</div>
			<div className="command-overview-container__bottom">
				<button>ABANDONNEZ LA COMMANDE</button>
				<button className="inactive">VALIDER LA COMMANDE</button>
			</div>
		</div>
	);
};

CommandOverview.propTypes = {
	cart: PropTypes.array,
	updateQty: propTypes.func,
};
export default CommandOverview;
