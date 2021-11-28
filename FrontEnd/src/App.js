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
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
