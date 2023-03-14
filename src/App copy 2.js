import React, { Component } from "react";
import classes from "./App.module.css";
import ProductPreview from "./ProductPreview/ProductPreview";
import ProductDatails from "./ProductDetails/ProductDatails";
import Topbar from "./Topbar/Topbar";
import ProductData from "./ProductData";

class App extends Component {
  state = {
    ProductData: ProductData,
    //currentPreviewImage: "https://imgur.com/iOeUBV7.png",
    currentPreviewImagePos: 0,
    //showHeartBeatSection: false,
    currentSelectedFeature: 0,
  };
  onColorOptionClick = (pos) => {
    // const updatedPreviewImage =
    //   this.state.ProductData.colorOptions[pos].imageUrl;
    // console.log(updatedPreviewImage);
    this.setState({ currentPreviewImagePos: pos });
  };
  onFeatureItemClick = (pos) => {
    // let updatedState = false;
    // if (pos === 1) {
    //   updatedState = true;
    // }
    // this.setState({ showHeartBeatSection: updatedState });
    this.setState({ currentSelectedFeature: pos });
  };
  render() {
    return (
      <div className="App">
        <Topbar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.ProductData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
          <div className={classes.ProductData}>
            <ProductDatails
              data={this.state.ProductData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
