/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actionAddProduct, actionGetProduct } from "../actions/actionCreators";
import { CLEAR_STATE } from "../actions/actionType";

function ProductForm() {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, errorMessage, isSuccess, successMessage } =
    useSelector((state) => state.addProduct);

  const productDetail = useSelector((state) => state.productDetail);

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
    dispatch(actionAddProduct(product, isEdit, id));
  };

  useEffect(() => {
    if (id) {
      dispatch(actionGetProduct(id));
      setProduct(productDetail.product);
      setIsEdit(true);
    }
  }, []);

  useEffect(() => {
    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch({ type: CLEAR_STATE });
    } else if (isSuccess && successMessage) {
      toast.success(successMessage);
      dispatch({ type: CLEAR_STATE });
      resetForm();
      navigate("/product");
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
            defaultValue={product.name}
            placeholder="Input product name"
          />
        </div>
        <div className="form-group">
          <label className="label">Product Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={handleFormChange}
            defaultValue={product.description}
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
            defaultValue={product.price}
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
            defaultValue={product.image_url}
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
