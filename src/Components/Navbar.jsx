import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import styles from "./Comp.module.css";
import Home from "./Home";
import Cart from "./Cart";
import Categories from "./Catergories";
import Login from "./Login";
import About from "./About";
import ContactUs from "./ContactUs";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/"> Home </Link>
        <Link to="/Categories"> Categories </Link>
        <Link to="/Cart"> Cart </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact Us </Link>
        <Link to="/login"> Login / Sign Up </Link>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Categories" component={Categories} />
        <Route path="/Cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route render={() => <h1>Error Code : 404 Page not Found.</h1>} />
      </Switch>
    </>
  );
};

export default Navbar;
