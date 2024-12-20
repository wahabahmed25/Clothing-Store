
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const AddToCartButton = ({onClick}) => {
  return (
    <div>
      <Link to="/cart" className="px-4 py-2 font-light bg-black text-white rounded opacity-80 hover:bg-gray-900" 
        onClick={onClick}>
        Add to Cart
      </Link>
    </div>
  )
}

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AddToCartButton
