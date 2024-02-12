import { atom, selector } from "recoil";
import superMock from "./mock.json";



export const nameCategorySelected = atom ({
	key: "nameCategorySelected",
	default: "boisson-chaude",
})
 
export const productSelectedState = atom({
	key: "productSelectedState", // unique ID (with respect to other atoms/selectors)
	default: "", // valeur par défaut (alias valeur initials)
});

export const cartProductState = atom({
	key: "cartProductState", // unique ID (with respect to other atoms/selectors)
	default: [], // valeur par défaut (alias valeur initials)
});

export const productState = atom({
	key: "productState", // unique ID (with respect to other atoms/selectors)
	default: [], // valeur par défaut (alias valeur initials)
});

export const filteredProductSelectedState = selector({
	key: "filteredProductSelectedState",
	get: ({ get }) => {
		const category = get(nameCategorySelected); // On récupère le nom de la catégorie en cours

		const productFiltered = superMock.filter(
			(item) => item.category === category
		);
		return productFiltered;
	},
});
