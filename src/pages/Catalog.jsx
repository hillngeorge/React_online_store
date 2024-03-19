import Product from "../components/Product";
import "./Catalog.css";

function Catalog() {
  const data = [
    {
      title: "Tomatoes",
      price: "26.68",
      category: "fruit",
      image: "tom.jpg",
      _id: "1",
    },
    {
      title: "oranges",
      price: "26.68",
      category: "fruit",
      image: "sliced-orange.jpg",
      _id: "2",
    },
  ];

  return (
    <div className="catalog page">
      <h1>Our amazing catalog!!</h1>
      {data.map((prod) => (
        <Product key={prod.id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;
