import './CommandOverview.css';
import PropTypes from "prop-types";
import ModuleProductOverview from './ModuleProductOverview';

const CommandOverview = ({ productFiltered }) => {
  console.log("render commandHoverview");

  return (
    <>
      {productFiltered && productFiltered.length > 0 && (
        <ModuleProductOverview productFiltered={productFiltered} />
      )}
    </>
  );
};

export default CommandOverview;

CommandOverview.propTypes = {
  productFiltered: PropTypes.array.isRequired,
};
