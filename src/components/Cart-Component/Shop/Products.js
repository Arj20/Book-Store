import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 6,
    title: "Kashmir",
    description: "Heaven on Earth.",
  },
  {
    id: "p2",
    price: 5,
    title: "My Journey",
    description: "A journey within oneself..",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>BUY YOUR FAVIROUTE PRODUCTS</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
