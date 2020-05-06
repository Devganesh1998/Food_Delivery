import React from "react";
import styles from "./Comp.module.css";
import { connect } from "react-redux";

const About = (props) => {
  return (
    <>
      <div className={styles.void}>{props.data}</div>
    </>
  );
};

const matchStateToProps = (state) => ({
  data: state.about,
});

export default connect(matchStateToProps, null)(About);
