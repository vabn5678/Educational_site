import React from "react";
import dark_arrow from '../assets/dark-arrow.png';
import './Hero.css';

const Hero = () => {

    return (

        <div className="hero container">
            <div className="hero-text">
                <h1>We ensure better Education for better world</h1>
                <p>Our cutting edge carriculum is to designed to empower students with  the knowledge, skills and experiences needed to exccel in the dynamic field education </p>
                <button className="btn">Explore more <img src={dark_arrow} alt="error" /></button>
            </div>
        </div>

    )

}

export default Hero;
