/* eslint-disable no-prototype-builtins */
// import ProductCard from "../components/ProductCard";
// import mock from "../../mock.json";
import superMock from "../mock.json";
import axios from "axios";

import { useEffect, useState } from "react";

export default function ChoiceProduct() {
	const [data, setData] = useState([]);
	console.log("render de ChoiceProduct");

	useEffect(() => {
		console.log("composant monté");
		// console.log(JSON.parse(superMock));
		axios
			.get(superMock)
			.then((response) => setData(response))
			.then((data) => console.log(data));

		// .then((data) => console.log(data));
	}, []);

	return (
		<>
			<p>La grande page</p>
			{/* {data && data.map((item) => <li key={item.id}>item.category</li>)} */}

			{/* <ProductCard key={index} product={product} /> */}
		</>
	);
}

// en dure pour le test :
// const productTest = {
// 	category: "burger",
// 	name: "big-mac",
// 	description:		"Un géant parmice spéciale. Prêt pour une expérience gastronomique démesurée ?, les burgers ! 12 onces de pur plaisir, fromage fondant, et sauce",

// 	image: "https://loremflickr.com/cache/resized/3046_2568827589_706e13d0be_320_240_nofilter.jpg",
// 	price: 9.99,
// };

// const productTest1 = {
// 	category: "burger",
// 	name: "big-moc",
// 	description:		"Un géant parmice spéciale. Prêt pour une expérience gastronomique démesurée ?, les burgers ! 12 onces de pur plaisir, fromage fondant, et sauce",

// 	image: "https://loremflickr.com/cache/resized/3046_2568827589_706e13d0be_320_240_nofilter.jpg",
// 	price: 19.99,
// };
