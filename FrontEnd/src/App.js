// import './App.css';
import ManageProduct from "./components/Product/ManageProduct";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import HomePage from "./components/HomePage/HomePage";
import ManageBaoHanh from "./components/BaoHanh/ManageBaoHanh";
import AddBaoHanh from "./components/BaoHanh/AddBaoHanh";
import EditBaoHanh from "./components/BaoHanh/EditBaoHanh";
import EditEmployee from './components/Nhanvien/EditEmployee';
import ManageEmployee from './components/Nhanvien/ManageEmployee';
import AddEmployee from './components/Nhanvien/AddEmployee';
import ListFamilyEmployee from './components/Nhanvien/ListFamilyEmployee';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <ManageProduct /> */}
      {/* <AddProduct /> */}

      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product" exact component={ManageProduct} />
          <Route path="/product/add" exact component={AddProduct} />
          <Route path="/product/edit" exact component={EditProduct} />
          <Route path="/baohanh" exact component={ManageBaoHanh} />
          <Route path="/baohanh/add" exact component={AddBaoHanh} />
          <Route path="/baohanh/edit" exact component={EditBaoHanh} />
          <Route path="/employee" exact component={ManageEmployee} />
          <Route path="/insert_employee" exact component={AddEmployee} />
          <Route path="/edit_employee" exact component={EditEmployee} />
          <Route path="/employee_family" exact component={ListFamilyEmployee} />
        </Switch>
      </Router>
    </div>
  );

  }
  export default App;
