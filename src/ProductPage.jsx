import { Link, useParams, useNavigate } from "react-router-dom";
import productsData from "./data.json";

const ProductPage = () => {
  const { productId } = useParams();

  // variables cannot start with capital letter
  const navigate = useNavigate();

  const { products } = productsData;

  const product = products.find(({ id }) => Number(productId) === id);

  return (
    <>
      <div className="product-detail">
        {console.log(useParams())}
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>
            <strong>Brand:</strong> {product.brand}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Price:</strong> ${product.price.toFixed(2)}
          </p>
          <p>
            <strong>Rating:</strong> {product.rating}
          </p>
        </div>
      </div>
      <Link to="/">Go to Home</Link>
      <button
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        Go To Home
      </button>
    </>
  );
};

export default ProductPage;
