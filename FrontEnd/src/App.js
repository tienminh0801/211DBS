// import './App.css';
import ManageProduct from "./components/Product/ManageProduct";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import HomePage from "./components/HomePage/HomePage";
import ManageBaoHanh from "./components/BaoHanh/ManageBaoHanh";
import AddBaoHanh from "./components/BaoHanh/AddBaoHanh";
import EditBaoHanh from "./components/BaoHanh/EditBaoHanh";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ManageOrder from './components/ManageOrder';
import AddOrder from './components/AddOrder';
import EditOrder from './components/EditOrder';
import AddProductOrder from './components/AddProductOrder';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
      </header>
      <div class='container my-5'>
        {/* <ManageProduct /> */}
        {/* <AddProduct /> */}
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/product" exact component={ManageProduct} />
            <Route path="/product/add" exact component={AddProduct} />
            <Route path="/product/edit" exact component={EditProduct} />
            <Route path="/order" exact component={ManageOrder} />
            <Route path="/add_order" exact component={AddOrder} />
            <Route path="/edit_order" exact component={EditOrder} />
            <Route path="/add_to_order" exact component={AddProductOrder} />
            <Route path="/baohanh" exact component={ManageBaoHanh} />
            <Route path="/baohanh/add" exact component={AddBaoHanh} />
            <Route path="/baohanh/edit" exact component={EditBaoHanh} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App
