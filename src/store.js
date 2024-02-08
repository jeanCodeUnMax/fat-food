import { atom, selector } from "recoil";

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
		const category = get(productSelectedState);
		const allProduct = get(productState);

		const productFiltered = allProduct.filter(
			(item) => item.category === category
		);
		return productFiltered;
	},
});
