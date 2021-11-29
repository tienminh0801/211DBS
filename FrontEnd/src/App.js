// import './App.css';
import ManageProduct from './components/ManageProduct';
import NavBar from './components/NavBar';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
            <Route path="/" exact component={ManageProduct} />
            <Route path="/add" exact component={AddProduct} />
            <Route path="/edit" exact component={EditProduct} />
            <Route path="/order" exact component={ManageOrder} />
            <Route path="/add_order" exact component={AddOrder} />
            <Route path="/edit_order" exact component={EditOrder} />
            <Route path="/add_to_order" exact component={AddProductOrder} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
