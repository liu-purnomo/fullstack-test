import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetOrders } from "../actions/actionCreators";
import { currencyFormatter } from "../helpers/currencyFormatter";

function ListOrder() {
  const { orders, isLoading } = useSelector((state) => state.orderList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetOrders());
  }, []);

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
                      <a href={`/order/${order.id}`}>Detail</a>
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
