import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actionGetOrderDetail } from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";
function OrderDetail() {
  const navigate = useNavigate();
  const [orderDetail, setOrderDetail] = useState({});
  const { order, isError, errorMessage } = useSelector(
    (state) => state.orderDetail
  );
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetOrderDetail(id));
  }, []);

  useEffect(() => {
    setOrderDetail(order);
    if (isError) {
      toast.error(errorMessage);
      navigate("/order");
    }
  }, [order, isError, errorMessage]);

  return (
    <>
      <div className="hero">
        <h1>Invoice</h1>
        <div className="row">
          <table className="tableStyle">
            <tbody>
              <tr>
                <th className="tableHeadInfo w-auto">Customer Name</th>
                <td className="tableHeadInfoValue">
                  {orderDetail?.Customer?.name}
                </td>
              </tr>
              <tr>
                <th className="tableHeadInfo w-auto">Order Id</th>
                <td className="tableHeadInfoValue">#{orderDetail?.id}</td>
              </tr>
              <tr>
                <th className="tableHeadInfo w-auto">Order Date</th>
                <td className="tableHeadInfoValue">
                  {moment(orderDetail?.createdAt).format("DD MMMM YYYY")}
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
        <div className="row">
          <table className="tableStyle">
            <thead>
              <tr>
                <th className="tableHead">#</th>
                <th className="tableHead">Product Name</th>
                <th className="tableHead">Quantity</th>
                <th className="tableHead">Price</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail?.ProductOrders?.map((item, index) => (
                <tr key={index}>
                  <td className="dataTable ">{index + 1}</td>
                  <td className="dataTable alignStart">{item.Product.name}</td>
                  <td className="dataTable">{item.quantity}</td>
                  <td className="dataTable alignStart">
                    {currencyFormatter(item.price)}
                  </td>
                </tr>
              ))}

              <tr>
                <td className="tableHeadInfo" colSpan="3">
                  Total Price
                </td>
                <td className="tableHeadInfo">
                  {currencyFormatter(orderDetail?.total_price)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row" style={{ marginTop: 20 + "px" }}>
          <button className="form-submit">Pay Now</button>
        </div>
      </div>
    </>
  );
}

export default OrderDetail;
