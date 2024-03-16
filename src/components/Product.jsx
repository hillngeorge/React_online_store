import "./Product.css";
import Quantity_picker from "./Quantity_picker";

function Product(props) {
  return (
    <div className="product">
      <img src="https://picsum.photos/200" />
      <h6>{props.info.title}</h6>
      <label>${props.info.price}</label>

      <Quantity_picker />
    </div>
  );
}

export default Product;
