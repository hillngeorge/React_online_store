import { useState } from "react";
import "./Quantity_picker.css";

function Quantity_picker() {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let newVal = quantity + 1;
    setQuantity(newVal);
  }
  function decrease() {
    if (quantity == 1) return;
    let newVal = quantity - 1;

    setQuantity(newVal);
  }

  return (
    <div className="qt-picker">
      <button
        className="btn btn-sm btn-outline-success"
        disabled={quantity == 1}
        onClick={decrease}
      >
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-outline-success" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Quantity_picker;
