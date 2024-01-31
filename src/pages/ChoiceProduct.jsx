import { useState } from "react";
import superMock from "../mock.json";
import NavbarCategory from "../components/NavbarCategory";
import CommandOverview from "../components/CommandOverview";
import TitleCategorySelected from "../components/TitleCategorySelected";
import ProductCard from "../components/ProductCard";
import "./ChoiceProduct.css";

export default function ChoiceProduct() {
  const [data] = useState(superMock);
  const [nameCategorySelected, setNameCategorySelected] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (name, qty, price) => {
    const newItem = { name, qty, price };
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  console.log("render choiceProduct");

  const productFiltered = data.filter((item) => item.category === nameCategorySelected);

  return (
    <>
      <h1 className="main-header text-center">Fat - Fooood</h1>
      <NavbarCategory stateTitleCategory={setNameCategorySelected} />
      <TitleCategorySelected nameCategorySelected={nameCategorySelected} />
      <main className="main-choice-product-page">
        <hr />
        <div className="choiceProduct">
          {data &&
            productFiltered.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                addToCart={addToCartHandler}
              />
            ))}
        </div>
        <CommandOverview cartItems={cartItems} productFiltered={productFiltered} />
      </main>
    </>
  );
}
