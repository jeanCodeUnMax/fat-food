import "./ItemCategory.css";
import PropTypes from "prop-types";

export default function ItemCategory(props) {
  const { item, stateTitleCategory } = props;
  const [titleCategory, setTitleCategory] = stateTitleCategory;

  const isSelected = titleCategory === item.name;

  console.log("render ItemCategory");

  const handleClick = () => {
    setTitleCategory(item.name);
  };

  return (
    <div className={`itemCategory text-center ${isSelected && "itemCategory--selected"}`} onClick={handleClick}>
      <div className="itemCategoryImage">
        <img src={`./src/assets/${item.image}`} alt={item.name} />
      </div>
      <p className="itemCategoryName">{item.name} </p>
    </div>
  );
}

ItemCategory.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  stateTitleCategory: PropTypes.func.isRequired, // Correction de PropTypes
};
