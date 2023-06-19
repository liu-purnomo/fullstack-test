import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actionGetOrders } from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";

function ListOrder() {
  const { orders, isLoading } = useSelector((state) => state.orderList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetOrders());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="hero">
          <h1>List of Orders</h1>
          <div className="row">
            <table className="tableStyle">
              <thead>
                <tr>
                  <th className="tableHead">#</th>
                  <th className="tableHead">Customer Name</th>
                  <th className="tableHead">Total Price</th>
                  <th className="tableHead">Detail</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td className="dataTable">{index + 1}</td>
                    <td className="dataTable alignStart">
                      {order.Customer.name}
                    </td>
                    <td className="dataTable alignStart">
                      {currencyFormatter(order.total_price)}
                    </td>
                    <td className="dataTable">
                      <Link to={`/order/${order.id}`}>
                        <button className="btn-blue">Detail</button>
                      </Link>
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

export default ListOrder;
