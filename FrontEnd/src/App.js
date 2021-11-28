// import './App.css';
import ManageProduct from "./components/Product/ManageProduct";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";
import HomePage from "./components/HomePage/HomePage";
import ManageBaoHanh from "./components/BaoHanh/ManageBaoHanh";
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
                </Switch>
            </Router>
        </div>
    );
}

export default App;
