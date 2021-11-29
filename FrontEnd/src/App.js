// import './App.css';
import ManageProduct from './components/ManageProduct';
import NavBar from './components/NavBar';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import EditEmployee from './components/Nhanvien/EditEmployee';
import ManageEmployee from './components/Nhanvien/ManageEmployee';
import AddEmployee from './components/Nhanvien/AddEmployee';
import ListFamilyEmployee from './components/Nhanvien/ListFamilyEmployee';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavBar /> */}
      </header>
      <div class='container-fluid'>
        {/* <ManageProduct /> */}
        {/* <AddProduct /> */}
        <Router>
          <Switch>
            <Route path="/" exact component={ManageEmployee} />
            <Route path="/add" exact component={AddProduct} />
            <Route path="/insert_employee" exact component={AddEmployee} />
            <Route path="/edit" exact component={EditProduct} />
            <Route path="/edit_employee" exact component={EditEmployee} />
            <Route path="/employee_family" exact component={ListFamilyEmployee} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
