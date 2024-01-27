import "./ItemCategory.css";
import PropTypes from "prop-types";


export default function ItemCategory(props) {
	const { item } = props;

	return (
		<div className="itemCategory" >
			<div className="itemCategoryImage">
				<img
					src={`./src/assets/${item.image}`}
					alt={item.name}
				/>
			</div>
			<p className="itemCategoryName">{item.name}</p>
		</div>
	);
}

// définir les types
ItemCategory.propTypes = {
	item: PropTypes.exact({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
};

