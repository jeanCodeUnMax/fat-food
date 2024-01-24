import ProductCard from "../components/ProductCard";
import "./ChoiceProduct.css";
import { useState } from "react";
import superMock from "../mock.json";

export default function ChoiceProduct() {
	const [data] = useState(superMock);
	return (
		<>
			<h1>the Fat - Fooood</h1>
			<div className="choiceProduct">
				{data &&
					data.map((item) => <ProductCard key={item.id} product={item} />)}
			</div>
		</>
	);
}
