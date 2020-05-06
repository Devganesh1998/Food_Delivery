import React from "react";
import styles from "./Comp.module.css";
import { connect } from "react-redux";

const ContactUs = (props) => {
  const { contact } = props;
  return (
    <>
      <div className={styles.void}>
        {Object.keys(contact).map((item) => {
          return (
            <div key={item}>
              {item} = {contact[item]}
            </div>
          );
        })}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  contact: state.contact,
});
export default connect(mapStateToProps)(ContactUs);
