import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  actionGetProducts,
  actionUpdateCartlength,
} from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";

function HomePage() {
  const { products, isLoading } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  const saveToLocalStorage = (productId, productName, productPrice) => {
    let isDuplicate = false;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((item) => {
      if (item.product_id === productId) {
        toast.error("Product already in cart");
        isDuplicate = true;
      }
    });

    if (isDuplicate) {
      return;
    } else {
      cart.push({
        product_id: productId,
        name: productName,
        price: productPrice,
        quantity: 1,
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success("Product added to cart");
    }

    dispatch(actionUpdateCartlength());
  };

  useEffect(() => {
    dispatch(actionGetProducts());
  }, [dispatch]);

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
                  <button
                    onClick={() =>
                      saveToLocalStorage(
                        product.id,
                        product.name,
                        product.price
                      )
                    }
                    className="add-to-cart"
                  >
                    Add to Cart
                  </button>
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
