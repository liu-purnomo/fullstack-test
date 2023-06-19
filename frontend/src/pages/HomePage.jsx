import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetProducts } from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";

function HomePage() {
  const { products, isLoading } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProducts());
  }, []);

  return (
    <>
      <div className="hero">
        <h1>List of Products</h1>
        <div className="row">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            products.map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="product-img"
                  src={product?.image_url}
                  alt={product?.name}
                />
                <div className="product-info">
                  <h4 className="product-name">{product?.name}</h4>
                  <p>{product?.description}</p>
                  <p>{currencyFormatter(product?.price)}</p>
                </div>
                <div className="product-actions">
                  <div className="product-set-quantity">
                    <button className="button-min">-</button>
                    <input
                      className="input-quantity"
                      type="number"
                      defaultValue="1"
                    />
                    <button className="button-plus">+</button>
                  </div>
                  <div>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
