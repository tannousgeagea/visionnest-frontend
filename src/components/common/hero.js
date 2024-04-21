import React from "react";
import './hero.css'

const Hero = () => {
    return (
        <div className="home-hero-section">
            <div className="hero-container">
                <div className="hero-wrapper">
                    <div className="hero-split">
                        <h1 className="hero-heading">
                            Welcome to VisionNest    
                        </h1>
                        <p className="hero-subtext">
                            Implies a place where visual data is nurtured and analysed, like a nest, to reveal deeper insight
                        </p>

                        <div className="button-wrap">

                            <div class="blue-btn">
                                <a class="first-link" href="">
                                    Get Started
                                </a>
                                <a href="">
                                Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero