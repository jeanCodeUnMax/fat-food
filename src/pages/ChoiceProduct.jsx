import ProductCard from "../components/ProductCard";
import "./ChoiceProduct.css";
import { useState } from "react";
import superMock from "../mock.json";
import NavbarCategory from "../components/NavbarCategory";
import CommandOverview from "../components/CommandOverview";
import TitleCategorySelected from "../components/TitleCategorySelected";

// const arrayCart = [];
export default function ChoiceProduct() {
	const [data] = useState(superMock);
	const [nameCategorySelected, setNameCategorySelected] = useState(null);
	const [cart, setCart] = useState([]);

	function handleAddToCart(product) {
		// arrayCart.push(product);
		// const arrayCart = [...arrayCart,product]
		setCart(prev => [...prev,product]);
	}

	



	const stateTitleCategory = [nameCategorySelected, setNameCategorySelected];
	const productFiltered = data.filter(
		(item) => item.category === nameCategorySelected
	);

	console.log("render choiceProduct");

	return (
		<>
			<h1 className="main-header text-center">Fat - Fooood</h1>
			<NavbarCategory stateTitleCategory={stateTitleCategory} />

			<TitleCategorySelected nameCategorySelected={nameCategorySelected} />
			<main className="main-choice-product-page">
				<hr />
				<div className="choiceProduct">
					{data &&
						// productFiltered.map((item) => <ProductCard key={item.id} product={item} setCart={setCart} />)}
						productFiltered.map((item) => (
							<ProductCard
								key={item.id}
								product={item}
								setCart={handleAddToCart}
							/>
						))}
				</div>
				<CommandOverview cart={cart} />
			</main>
		</>
	);
}
