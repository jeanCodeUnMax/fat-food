import ProductCard from "../components/ProductCard";
import "./ChoiceProduct.css";
import { useState } from "react";
import superMock from "../mock.json";
import NavbarCategory from "../components/NavbarCategory";
import CategorySelected from "../components/CategorySelected";


export default function ChoiceProduct() {
	const [data] = useState(superMock);
	return (
		<>
			<h1 className="main-header">Fat - Fooood</h1>
			<NavbarCategory />
			<hr />
			<CategorySelected/>
			<div className="choiceProduct">
				{data &&
					data.map((item) => <ProductCard key={item.id} product={item} />)}
			</div>
		</>
	);
}
