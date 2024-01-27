import "./NavbarCategory.css";
import ItemCategory from "./ItemCategory";

const category = [
	{ name: "Burger", image: "burger_13.jpg" },
	{ name: "frite", image: "frite_1.jpg" },
	{ name: "dessert", image: "dessert_6.jpg" },
	{ name: "boisson-chaude", image: "boisson-chaude_3.webp" },
	{ name: "boisson-froide", image: "boisson-froide_45.webp" },
	{ name: "salade", image: "salade_6.jpg" },
	{ name: "nuggets", image: "nuggets_5.jpg" },
	{ name: "petit-dej", image: "petit-dej_4.jpg" },
];

export default function NavbarCategory() {
	// const { category } = props;

	return (
		<nav className="navbarCategory">
			{category &&
				category.map((item) => <ItemCategory key={item.id} item={item} />)}
		</nav>
	);
}
