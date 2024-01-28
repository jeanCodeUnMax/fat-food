import ProductCard from '../components/ProductCard';
import './ChoiceProduct.css';
import { useState } from 'react';
import superMock from '../mock.json';
import NavbarCategory from '../components/NavbarCategory';
import CommandOverview from '../components/CommandOverview';

export default function ChoiceProduct() {
  const [data] = useState(superMock);
  return (
    <>
      <h1 className='main-header text-center'>Fat - Fooood</h1>
      <NavbarCategory />
      <main className='main-choice-product-page'>
        <div className='choiceProduct'>
          {data &&
            data.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
        <CommandOverview />
      </main>
    </>
  );
}
