import logo from "./logo.svg";
import classes from "./App.module.css";
import ProductData from "./ProductData";
// import ProductPreview from "./ProductPreview";
// import ProductDatails from "./ProductDatails";

function App() {
  const currentHour =
    new Date().getHours() > 9
      ? new Date().getHours()
      : "0" + new Date().getHours;
  const currentMinute =
    new Date().getMinutes() > 9
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes;
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img
            src="https://amazon-blogs-brightspot-lower.s3.amazonaws.com/about/a9/af/27a4ef844ac38129d0fa460675fb/amazon-logo.svg"
            alt="Amazon Logo"
          />
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Preview" />
          <div className={classes.TimeSection}>
            <p>{`${currentHour}:${currentMinute}`}</p>
          </div>

          {/* <div className={classes.HeartBeatSection}>
            <i class="fa-solid fa-heart-pulse"></i>
            <p>78</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
