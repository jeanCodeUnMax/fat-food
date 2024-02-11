import "./css/NavbarCategory.css";
import ItemCategory from "./ItemCategory";
import PropTypes from "prop-types";

const category = [
	{ name: "burger", image: "burger_13.jpg" },
	{ name: "frite", image: "frite_1.jpg" },
	{ name: "dessert", image: "dessert_6.jpg" },
	{ name: "boisson-chaude", image: "boisson-chaude_3.webp" },
	{ name: "boisson-froide", image: "boisson-froide_45.webp" },
	{ name: "salade", image: "salade_6.jpg" },
	{ name: "nuggets", image: "nuggets_5.jpg" },
	{ name: "petit-dej", image: "petit-dej_4.jpg" },
];

export default function NavbarCategory(props) {
	const { filteredProductSelected } = props;
	console.log("render navbarCategory");

	return (
		<nav className="navbarCategory">
			{category &&
				category.map((item) => (
					<ItemCategory
						key={item.name}
						item={item}
						stateTitleCategory={filteredProductSelected}
					/>
				))}
		</nav>
	);
}

NavbarCategory.propTypes = {
	stateTitleCategory: PropTypes.array,
	filteredProductSelected: PropTypes.array,
};
