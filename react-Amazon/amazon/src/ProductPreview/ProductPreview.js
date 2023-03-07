import react from "react";
//import classes from "./App.module.css";
import classes from "./ProductPreview.module.css";

const ProductPreview = (props) => {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const currentMin =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();
  return (
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="product preview"></img>

      {props.currentSelectedFeature === 1 ? (
        <div className={classes.heartBeat}>
          <i className="fa-solid fa-heart-pulse"></i>

          <p>78</p>
        </div>
      ) : (
        <div className={classes.TimeSection}>
          <p>
            {currentHour}:{currentMin}
          </p>
        </div>
      )}
    </div>
  );
};
export default ProductPreview;
