// import './App.css';
import ManageProduct from "./components/Product/ManageProduct";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import HomePage from "./components/HomePage/HomePage";
import ManageBaoHanh from "./components/BaoHanh/ManageBaoHanh";
import AddBaoHanh from "./components/BaoHanh/AddBaoHanh";
import EditBaoHanh from "./components/BaoHanh/EditBaoHanh";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManageOrder from './components/DonHang/ManageOrder';
import AddOrder from './components/DonHang/AddOrder';
import EditOrder from './components/DonHang/EditOrder';
import AddProductOrder from './components/DonHang/AddProductOrder';


function App() {
  return (
      <div class='container'>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product" exact component={ManageProduct} />
            <Route path="/product/add" exact component={AddProduct} />
            <Route path="/product/edit" exact component={EditProduct} />
            <Route path="/order" exact component={ManageOrder} />
            <Route path="/order/add" exact component={AddOrder} />
            <Route path="/order/edit" exact component={EditOrder} />
            <Route path="/order/add_product" exact component={AddProductOrder} />
            <Route path="/baohanh" exact component={ManageBaoHanh} />
            <Route path="/baohanh/add" exact component={AddBaoHanh} />
            <Route path="/baohanh/edit" exact component={EditBaoHanh} />
          </Switch>
        </Router>
      </div>
  );
}
export default App
