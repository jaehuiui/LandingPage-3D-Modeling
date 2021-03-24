import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import ReactPageScroller from "react-page-scroller";
import Header from "../Header";
import AboutUs from "../AboutUs";
import Product from "../Team/Product";
import Developer from "../Team/Developer";
import Research from "../Team/Research";
import Design from "../Team/Design";
import Footer from "../Footer";

function App() {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <React.Fragment>
      <CssBaseline />
      <ReactPageScroller
        pageOnChange={(number) => {
          setCurrentPage(number);
        }}
        onBeforePageScroll={(number) => {
          setCurrentPage(number);
        }}
        customPageNumber={currentPage}
        animationTimer={650}
        animationTimerBuffer={200}
      >
        <Header />
        <AboutUs />
        <Product />
        <Developer />
        <Research />
        <Design />
        <Footer />
      </ReactPageScroller>
    </React.Fragment>
  );
}

export default App;
