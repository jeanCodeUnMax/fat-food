import "./ItemCategory.css";
import PropTypes from "prop-types";

// methode de desctreuturation dans les parametre de la function
//  donc props en variable directement
export default function ItemCategory({ item, stateTitleCategory }) {

	const [titleCategory, setTitleCategory] = stateTitleCategory;

  const isSelected = titleCategory === item.name; 

	console.log("render ItemCategory");

	const handleClick = () => {
		console.log("merci REmi ");
    setTitleCategory(item.name)
	};
	return (
		<div className={`itemCategory text-center ${isSelected && "itemCategory--selected"}`} onClick={handleClick}>
			<div className="itemCategoryImage">
				<img src={`./src/assets/${item.image}`} alt={item.name} />
			</div>
			<p className="itemCategoryName">{item.name} </p>
		</div>
	);
}

ItemCategory.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
	}).isRequired,
	stateTitleCategory: PropTypes.array,
};
