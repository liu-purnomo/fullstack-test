import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actionGetProduct } from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";
function ProductDetail() {
  const navigate = useNavigate();
  const { product, isError, errorMessage } = useSelector(
    (state) => state.productDetail
  );
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      navigate("/product");
    }
  }, [isError, errorMessage, navigate]);

  return (
    <>
      <div className="hero">
        <h1>Product Detail</h1>
        <div
          className="row"
          style={{
            margin: 20 + "px",
          }}
        >
          <Link to={`/edit-product/${product.id}`}>
            <button className="btn-blue">Edit Product</button>
          </Link>
          <Link to="/product">
            <button
              className="btn-red"
              style={{
                marginLeft: 20 + "px",
              }}
            >
              Back to Product List
            </button>
          </Link>
        </div>
        <div className="row">
          <table className="tableStyle">
            <tbody>
              <tr>
                <th className="tableHeadInfo w-auto">Product Image</th>
                <td className="tableHeadInfoValue">
                  <img src={product.image_url} alt={product.name} />
                </td>
              </tr>
              <tr>
                <th className="tableHeadInfo w-auto">Product Name</th>
                <td className="tableHeadInfoValue">{product.name}</td>
              </tr>
              <tr>
                <th className="tableHeadInfo w-auto">Product Description</th>
                <td className="tableHeadInfoValue">{product.description}</td>
              </tr>
              <tr>
                <th className="tableHeadInfo w-auto">Product Price</th>
                <td className="tableHeadInfoValue">
                  {currencyFormatter(product.price)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            marginTop: 20 + "px",
          }}
        ></div>
      </div>
    </>
  );
}

export default ProductDetail;
