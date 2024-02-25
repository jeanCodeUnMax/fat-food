import ProductCard from "./ProductCard";
import { filteredProductSelectedState } from "../store";
import { useRecoilValue } from "recoil";

export default function ListeProduct(){
  const filteredProductSelected = useRecoilValue(filteredProductSelectedState); 

  return (
  <div className="choiceProduct">
					{filteredProductSelected.map((item) => (
						<ProductCard key={item.id} product={item} />
					))}
				</div>
)}
