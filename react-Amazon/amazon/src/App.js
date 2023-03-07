import logo from "./logo.svg";
import React, { Component } from "react";
import classes from "./App.module.css";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDetails from "./ProductDetails/ProductDetails";
import TopBar from "./TopBar/TopBar";
import ProductData from "./Utils/ProductData";

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewPos: 0,
    currentSelectedFeature: 0,
  };
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewPos: pos });
  };
  onFeatureItemClick = (pos) => {
    this.setState({ currentSelectedFeature: pos });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar></TopBar>
        </header>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.productData.colorOptions[
                  this.state.currentPreviewPos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            ></ProductPreview>
          </div>

          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.productData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewpos={this.state.currentPreviewPos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            ></ProductDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
