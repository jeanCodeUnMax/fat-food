import "./css/ItemCategory.css";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { nameCategorySelected } from "../store";

export default function ItemCategory({ item }) {
	//const name = useRecoilValue(nameCategorySelected); //useRecoilValue(nameCategorySelected)-> string
	const [name, setTitleCategory] = useRecoilState(nameCategorySelected);
	console.log("render ItemCategory");
	
	console.log(name);

	const isSelected = name === item.name;

	const handleClick = () => {
		// console.log("merci MASTER REmi tu es mon ROI :D");
		setTitleCategory(item.name);
	};
	console.log("Je sors de Itemcategory");
	return (
		<div
			className={`itemCategory text-center ${
				isSelected && "itemCategory--selected"
			}`}
			onClick={handleClick}
			>
			<div className="itemCategoryImage">
				<img src={`./src/assets/${item.image}`} alt={item.name} />
			</div>
			<p className="itemCategoryName">{item.name} </p>
		</div>
	);
}

ItemCategory.propTypes = {
	item: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
	}),
	stateTitleCategory: PropTypes.array,
};
