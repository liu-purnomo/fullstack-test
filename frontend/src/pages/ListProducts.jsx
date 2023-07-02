import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  actionDeleteProduct,
  actionGetProducts,
} from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";

function ListProduct() {
  const { products, isLoading } = useSelector((state) => state.getProducts);
  const { isError, errorMessage, successMessage, isSuccess } = useSelector(
    (state) => state.deleteProduct
  );

  const [deleteFunction, setDeleteFunction] = useState(false);

  const dispatch = useDispatch();

  const deleteProduct = async (id) => {
    window.confirm("Are you sure want to delete this product?")
      ? (await dispatch(actionDeleteProduct(id)),
        setDeleteFunction(true),
        dispatch(actionGetProducts()))
      : setDeleteFunction(false);
  };

  useEffect(() => {
    dispatch(actionGetProducts());
  }, [dispatch]);

  useEffect(() => {
    if (deleteFunction) {
      if (isSuccess && successMessage) {
        toast.success(successMessage);
        dispatch(actionGetProducts());
        setDeleteFunction(false);
      } else if (isError && errorMessage) {
        toast.error(errorMessage);
        setDeleteFunction(false);
      }
    }
  }, [
    isError,
    errorMessage,
    successMessage,
    isSuccess,
    deleteFunction,
    dispatch,
  ]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : products.length === 0 ? (
        <div className="hero">
          <h1>No products found</h1>
          <div
            className="row"
            style={{
              margin: 20 + "px",
            }}
          >
            <Link to="/add-product">
              <button className="btn-blue">Add Product</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="hero">
          <h1>List of Product</h1>
          <div
            className="row"
            style={{
              margin: 20 + "px",
            }}
          >
            <Link to="/add-product">
              <button className="btn-blue">Add Product</button>
            </Link>
          </div>
          <div className="row">
            <table className="tableStyle">
              <thead>
                <tr>
                  <th className="tableHead">No</th>
                  <th className="tableHead">Product Name</th>
                  <th className="tableHead">Product Price</th>
                  <th className="tableHead">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td className="dataTable">{index + 1}</td>
                    <td className="dataTable alignStart">{product.name}</td>
                    <td className="dataTable alignStart">
                      {currencyFormatter(product.price)}
                    </td>
                    <td className="dataTable">
                      <Link to={`/product/${product.id}`}>
                        <button className="btn-link">Detail</button>
                      </Link>
                      <Link to={`/edit-product/${product.id}`}>
                        <button className="btn-link">Edit</button>
                      </Link>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="btn-link"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ListProduct;
