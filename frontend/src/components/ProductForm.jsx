/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actionAddProduct } from "../actions/actionCreators";
import { CLEAR_STATE } from "../actions/actionType";

function ProductForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage, isSuccess, successMessage } =
    useSelector((state) => state.addProduct);

  //state untuk menyimpan data sementara
  const [product, setProduct] = useState({
    name: undefined,
    description: undefined,
    price: undefined,
    image_url: undefined,
  });

  const resetForm = () => {
    setProduct({
      ...product,
      name: undefined,
      description: undefined,
      price: undefined,
      image_url: undefined,
    });
  };

  const handleFormChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(actionAddProduct(product));
  };

  useEffect(() => {
    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess && successMessage) {
      toast.success(successMessage);
      dispatch({ type: CLEAR_STATE });
      resetForm();
      navigate("/");
    }
  }, [isLoading, isError, errorMessage, isSuccess, successMessage]);
  return (
    <>
      <form onSubmit={handleFormSubmit} className="form">
        <div className="form-group">
          <label className="label">Product Name</label>
          <input
            type="text"
            onChange={handleFormChange}
            className="form-control"
            name="name"
            placeholder="Input product name"
          />
        </div>
        <div className="form-group">
          <label className="label">Product Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={handleFormChange}
            rows={4}
            placeholder="Input product description"
          />
        </div>
        <div className="form-group">
          <label className="label">Product Price</label>
          <input
            type="number"
            className="form-control"
            onChange={handleFormChange}
            name="price"
            placeholder="Input product price"
          />
        </div>
        <div className="form-group">
          <label className="label">Product Image</label>
          <input
            type="text"
            className="form-control"
            onChange={handleFormChange}
            name="image_url"
            placeholder="Input product image url"
          />
        </div>
        <button type="submit" className="form-submit">
          Send Product Data
        </button>
      </form>
    </>
  );
}

export default ProductForm;
