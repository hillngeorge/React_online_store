import Product from "../components/Product";
import "./Catalog.css";

function Catalog() {
  const data = [
    {
      title: "Tomatoes",
      price: "26.68",
      category: "fruit",
      image: "img1.jpg",
      _id: "1",
    },
    {
      title: "oranges",
      price: "26.68",
      category: "fruit",
      image: "img1.jpg",
      _id: "2",
    },
  ];

  return (
    <div className="catalog page">
      <h1>Our amazing catalog!!</h1>
      <Product info={data[0]} />
      <Product info={data[1]} />
    </div>
  );
}

export default Catalog;
