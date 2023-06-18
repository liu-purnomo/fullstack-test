import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./assets/css/style.scss";
import router from "./routers";
import store from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
