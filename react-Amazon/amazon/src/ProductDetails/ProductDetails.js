import React from "react";
import classes from "./ProductDetails.module.css";
import ProductData from "../Utils/ProductData";

const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.productImage];
    if (pos === props.currentPreviewpos) {
      classArr.push(classes.selectedProductImage);
    }
    return (
      <img
        key={pos}
        className={classArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => props.onColorOptionClick(pos)}
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.featureItem];

    if (pos === props.currentSelectedFeature) {
      classArr.push(classes.selectedFeatureItem);
    } else if (pos === 0 && !props.currentSelectedFeature) {
      classArr.push(classes.selectedFeatureItem);
    }
    return (
      <button
        onClick={() => props.onFeatureItemClick(pos)}
        key={pos}
        className={classArr.join(" ")}
      >
        {item}
      </button>
    );
  });
  return (
    <div className={classes.productData}>
      <h1 className={classes.productTitle}>{props.data.title}</h1>
      <p className={classes.productDescription}>{props.data.description}</p>
      <h3 className={classes.sectionHeding}>Select color</h3>
      <div>{colorOptions}</div>

      <h3 className={classes.productImage}>Features</h3>

      <div>{featureList}</div>

      <button className={classes.buynowButton}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
