import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Title from "./Components/Title";
import About from "./Components/About";
import Campus from "./Components/Campus";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import VedioPlayer from "./Components/Vedioplayer";

const App = () => {
  const [playstate, setplaystate] = useState(false);
  return (

    <div>

      <Navbar />

      <Hero />

      <div className="container">

        <Title subTitle='Our Program' title='What We Offer' />

        <Program />

        <About setplaystate={setplaystate} />

        <Title subTitle='Gallery' title='Campus Photos' />

        <Campus />

        <Title subTitle='Testimonials' title='What Student Says' />

        <Testimonial />

        <Title subTitle='Contact Us' title='Get in Touch' />

        <Contact />
        <Footer />
      </div>
      <VedioPlayer playstate={playstate} setplaystate={setplaystate} />
    </div>
  )
}
export default App;

