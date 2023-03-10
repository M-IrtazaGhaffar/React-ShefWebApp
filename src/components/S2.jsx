import React from 'react'
import "../styles/S2.css";
import Lottie from "lottie-react";
import A1 from "../animations/ani1.json";
import A2 from "../animations/ani2.json";
import A3 from "../animations/ani3.json";

function S2() {
    return (
        <>
            <div className="s2-all">
                <div className="s2-head">
                    <h2>
                        ` How Shef Works! `
                    </h2>
                </div>
                <div className="s2-cards">
                    <div className="card card1">
                        <div className="animation">
                            <Lottie animationData={A1} />
                        </div>
                        <h4>
                            Choose your delivery days
                        </h4>
                        <p>
                            Pick the days you’d like your meals to arrive. No subscription necessary!
                        </p>
                    </div>
                    <div className="card card2">
                        <div className="animation">
                            <Lottie animationData={A2} />
                        </div>
                        <h4>
                            Browse & build your meals
                        </h4>
                        <p>
                            Select from a variety of homemade dishes & cuisines
                        </p>
                    </div>
                    <div className="card card3">
                        <div className="animation">
                            <Lottie animationData={A3} />
                        </div>
                        <h4>
                            Delivered, Eat, Repeat
                        </h4>
                        <p>
                            Dishes arrive refrigerated at your door. Heat in minutes & enjoy stress-free!
                        </p>
                    </div>
                </div>
                <div className="s2-slider">
                    <h2>
                    "Featured dishes"
                    </h2>
                    <div id="slideshow">
                        <div class="slide-wrapper">
                            <div className="slide">
                                <h4>
                                    Jaganya J.
                                </h4>
                                <p>
                                    Ever since leaving India, cooking is how I stay connected to my roots. Shef has given me a sense of purpose and pride. Now I get to cook for my community and make a substantial income that I can rely on.
                                </p>
                            </div>
                            <div className="slide">
                                <h4>
                                    Julie Y.
                                </h4>
                                <p>
                                    I learned to cook from my mother in our village in Southern China. When we immigrated to the US, we brought along the flavors of our hometown. With Shef, I can now share those flavors with my entire community.
                                </p>
                            </div>
                            <div className="slide">
                                <h4>
                                    Mojgan B.
                                </h4>
                                <p>
                                    I was born and raised in Tehran, Iran, where I began learning traditional recipes from my grandmother. I'm honored to share our family recipes at your kitchen table, and I hope they'll fill you with a feeling of home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="s2-button">
                    <button>
                        See shefs in your area
                    </button>
                </div>
            </div>
        </>
    )
}

export default S2