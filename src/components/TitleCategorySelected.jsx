import "./TitleCategorySelected.css";
import PropTypes from "prop-types";

export default function TitleCategorySelected(props) {
	const { nameCategorySelected } = props;
	return (
		<>
			<div className="container-title-category-selected">
				<button className="category-selected-return-bouton title">
					{nameCategorySelected
						? `voici nos  ${nameCategorySelected}`
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
