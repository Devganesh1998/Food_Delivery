import React from "react";
import styles from "./Comp.module.css";
import { connect } from "react-redux";
import { addToCart } from "../Redux/action";

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (item, innerRef, foodData) => {
    console.log("inside handle click", item, innerRef, foodData);
    this.props.addCart({
      data: [item, innerRef, foodData[item][innerRef]],
    });
  };

  render() {
    const { foodData } = this.props;
    console.log(this.props);
    return (
      <>
        <div className={styles.void}>
          {Object.keys(foodData).map((item) => {
            return (
              <div key={item}>
                <h2>Categorey = {item}</h2>
                <div>
                  {Object.keys(foodData[item]).map((innerRef) => {
                    return (
                      <div key={innerRef}>
                        <h3>
                          {innerRef} = {foodData[item][innerRef]}
                        </h3>
                        <button
                          onClick={() =>
                            this.handleClick(item, innerRef, foodData)
                          }
                        >
                          Add to Cart
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  foodData: state.foodData,
});

const mapDispatchToProps = (dispatch) => ({
  addCart: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
