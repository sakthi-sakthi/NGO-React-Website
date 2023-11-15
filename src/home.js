import React from "react";
import About from "./components/about";
import Chooseus from "./components/chooseus";
import Counts from "./components/counts";
import Header from "./components/header";
import Members from "./components/members";
import Portfolio from "./components/portfolio";
import Services from "./components/services";
import Slider from "./components/slider";
import News from "./components/news";
import Footer from "./components/footer";

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Chooseus />
      <Counts />
      <About />
      <Services />
      <br />
      <Members />
      <Portfolio />
      <News />
      <Footer />
    </>
  );
}

export default Home;
