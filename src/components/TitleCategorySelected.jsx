import "./css/TitleCategorySelected.css";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { nameCategorySelected } from "../store";

export default function TitleCategorySelected() {
	const nameSelected = useRecoilValue(nameCategorySelected);
	console.log("Bonjour, je suis TitleCategorySelected");
	console.log(nameCategorySelected);
	console.log("Au revoir, je sors de TitleCategorySelected");
	return (
		<>
			<div className="container-title-category-selected">
				<button className="category-selected-return-bouton title">
					{nameSelected
						? `voici nos  ${nameSelected}`
						: "faites votre choix ??"}
				</button>
				<button className="category-selected-return-bouton return">retour</button>
			</div>
		</>
	);
}


TitleCategorySelected.propTypes = {
	nameCategorySelected: PropTypes.string,
};
