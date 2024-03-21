import { useState } from "react";
import "./ShoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(["test 1", "test 2", "test 3"]);
  function addItem() {
    console.log("adding");

    /**
     * create a copy
     * modify your copy
     * set the copy
     */
    let copy = [...list];
    copy.push("NEW");
    setList(copy);
  }

  return (
    <div className="shopping-List page">
      <h3>Shopping List</h3>

      <div className="box">
        <input type="text" />
        <button classNam onClick={addItem} className="btn btn-sm btn-success">
          Add To List
        </button>
      </div>
      <ul>
        {list.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}
export default ShoppingList;
