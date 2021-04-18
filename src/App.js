import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import DashBoard from './Components/Dashboard/DashBoard';
import Admin from './Components/Admin/Admin';
import AddService from './Components/AddService/AddService';
import AddReviews from './Components/AddReviews/AddReviews';
import { createContext, useContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageService from './Components/MangeService/ManageService';
import Orders from './Components/Orders/Orders';
import Order from './Components/Order/Order';

export const UserContext = createContext();



function App() {

  const {loggedInUser, setLoggedInUser} = useState({})
 
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/addReviews">
            <AddReviews></AddReviews>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>


    </div>
    </UserContext.Provider>

  );
}

export default App;
