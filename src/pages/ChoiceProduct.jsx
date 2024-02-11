// import ProductCard from "../components/ProductCard";
// import "./ChoiceProduct.css";
// import { useState } from "react";
// import superMock from "../mock.json";
// import NavbarCategory from "../components/NavbarCategory";
// import CommandOverview from "../components/CommandOverview";
// import TitleCategorySelected from "../components/TitleCategorySelected";
// import { useRecoilValue } from "recoil";
// import { filteredProductSelectedState } from "../store";

// const [data] = useState(superMock);


// export default function ChoiceProduct() {
// 	function updateQty(product, qty) {
		
	
// 		const [nameCategorySelected, setNameCategorySelected] = useState(null);
// 		const [cart, setCart] = useState([]);

// 		const filteredProductSelected = useRecoilValue([filteredProductSelectedState]);

// 		function updateQty(product, qty) {
// 			setCart((prev) => {
// 				let updatedCart = [...prev];
// 				const index = updatedCart.findIndex(
// 					(item) => item.product.id === product.id
// 				);
// 				if (index !== -1) {
// 					updatedCart[index] = { ...updatedCart[index], qty: qty };
// 					updatedCart = updatedCart.filter((item) => item.qty > 0);
// 				}
// 				return updatedCart;
// 			});
// 		}

// 	}

	

	

// 	const filteredProductSelectedState = data.filter(
// 		(item) => item.category === nameCategorySelected
// 	);

// 	console.log("render choiceProduct");

// 	return (
// 		<>
// 			<h1 className="main-header text-center">Fat - Fooood</h1>
// 			<NavbarCategory stateTitleCategory={stateTitleCategory} />

// 			<TitleCategorySelected nameCategorySelected={nameCategorySelected} />
// 			<main className="main-choice-product-page">
// 				<hr />
// 				<div className="choiceProduct">
// 					{data &&
// 						nameCategorySelected.map((item) => (
// 							<ProductCard
// 								key={item.id}
// 								product={item}
// 								handleAddToCart={handleAddToCart}
// 							/>
// 						))}
// 				</div>
// 				<CommandOverview cart={cart} updateQty={updateQty} />
// 			</main>
// 		</>
// 	);
// }

import React, { useState } from "react"; // Importe useState depuis react

import ProductCard from "../components/ProductCard";
import "./ChoiceProduct.css";
import superMock from "../mock.json";
import NavbarCategory from "../components/NavbarCategory";
import CommandOverview from "../components/CommandOverview";
import TitleCategorySelected from "../components/TitleCategorySelected";
import { useRecoilValue } from "recoil";
import { filteredProductSelectedState } from "../store";

export default function ChoiceProduct() {
  const [data] = useState(superMock);
  const [nameCategorySelected, setNameCategorySelected] = useState(null);
  const [cart, setCart] = useState([]);

  const filteredProductSelected = useRecoilValue(filteredProductSelectedState);

  function updateQty(product, qty) {
    setCart((prev) => {
      let updatedCart = [...prev];
      const index = updatedCart.findIndex(
        (item) => item.product.id === product.id
      );
      if (index !== -1) {
        updatedCart[index] = { ...updatedCart[index], qty: qty };
        updatedCart = updatedCart.filter((item) => item.qty > 0);
      }
      return updatedCart;
    });
  }

  function handleAddToCart(product) {
    const index = cart.findIndex((item) => item.product.id === product.id);

    if (index === -1) {
      setCart((prev) => [...prev, { product: product, qty: 1 }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[index].qty += 1;
      setCart(updatedCart);
    }
  }

  const stateTitleCategory = [nameCategorySelected, setNameCategorySelected];
  const filteredProducts = data.filter(
    (item) => item.category === nameCategorySelected
  );

  console.log("render choiceProduct");
  console.log(filteredProductSelected);

  return (
    <>
      <h1 className="main-header text-center">Fat - Fooood</h1>
      <NavbarCategory stateTitleCategory={stateTitleCategory} />
      <TitleCategorySelected nameCategorySelected={nameCategorySelected} />
      <main className="main-choice-product-page">
        <hr />
        <div className="choiceProduct">
          {data &&
            filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                handleAddToCart={handleAddToCart}
              />
            ))}
        </div>
        <CommandOverview cart={cart} updateQty={updateQty} />
      </main>
    </>
  );
}
