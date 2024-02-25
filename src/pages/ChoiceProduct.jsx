import "./ChoiceProduct.css";
import NavbarCategory from "../components/NavbarCategory";
import CommandOverview from "../components/CommandOverview";
import TitleCategorySelected from "../components/TitleCategorySelected";
import ListeProduct from "../components/ListeProduct";

export default function ChoiceProduct() {
	
	return (
		<>
			<h1 className="main-header text-center">Fat - Fooood</h1>
			<NavbarCategory />
			<TitleCategorySelected />
			<main className="main-choice-product-page">
				<hr />
				<ListeProduct />
				<CommandOverview />
			</main>
		</>
	);
}
