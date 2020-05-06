import React from "react";
import styles from "./Comp.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartData } = props;
  console.log(cartData);
  if (!(Object.keys(cartData).length === 0)) {
    return (
      <>
        <div className={styles.void}>
          {Object.keys(cartData).map((item) => {
            return (
              <div key={item}>
                <h3>{item}</h3>
                {cartData[item].data.map((innerItem) => {
                  return <h4 key={innerItem}>{innerItem}</h4>;
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3>The Cart is Empty add items to view</h3>
        <Link to="/Categories">Click here to add items to cart</Link>
      </>
    );
  }
};

const matchStateToProps = (state) => ({
  cartData: state.cart,
});

export default connect(matchStateToProps)(Cart);
