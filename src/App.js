import React, { useEffect, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./pages/Home";
import AddNew from "./pages/AddNew";
import ProductDetail from "./components/products/ProductDetail";
import Navbar from "./components/layout/Navbar";
import ProductState from "./context/product/ProductState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import CartModal from "./components/layout/CartModal";

const App = () => {
  return (
    <AuthState>
      <ProductState>
        <AlertState>
          <BrowserRouter>
            <Fragment>
              <Navbar />
              <CartModal />
              <Switch>
                <Route path="/product/:id" component={ProductDetail} />
                <Route path="/addnew" render={AddNew} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route path="/" component={Home} />
              </Switch>
            </Fragment>
          </BrowserRouter>
        </AlertState>
      </ProductState>
    </AuthState>
  );
};

export default App;
