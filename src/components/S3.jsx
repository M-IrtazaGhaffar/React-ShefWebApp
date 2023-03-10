import React from 'react'
import "../styles/S3.css";

function S3() {
    return (
        <>
            <div className="s3-all">
                <h2>
                    ` About the Chefs `
                </h2>
                <div className="s3-cards">
                    <div className="s3-card">
                        <h3>
                            1M+
                        </h3>
                        <p>
                            Over 1,000,000 authentic homemade dishes served
                        </p>
                    </div>
                    <div className="s3-card">
                        <h3>
                            4.7/5
                        </h3>
                        <p>
                            Average shef rating from thousands of happy customers
                        </p>
                    </div>
                    <div className="s3-card">
                        <h3>
                            100%
                        </h3>
                        <p>
                            All shefs are food safety certified
                        </p>
                    </div>
                </div>
                <h2 className='head-2'>
                    Why try Shef?
                </h2>
                <div className="s3-cards2">
                    <div className="s3-card2">
                        <h3>
                            Support local cooks
                        </h3>
                        <p>
                            Unlike restaurants, you know exactly who is preparing your food
                        </p>
                    </div>
                    <div className="s3-card2">
                        <h3>
                            Explore new cultures
                        </h3>
                        <p>
                            Reconnect with your heritage or discover new cultures through traditional homemade dishes
                        </p>
                    </div>
                    <div className="s3-card2">
                        <h3>
                            Starting at $7
                        </h3>
                        <p>
                            Enjoy real homemade food at a reasonable price, without sacrificing time
                        </p>
                    </div>
                </div>
                <div className="s3-button">
                    <button>
                        Explore meals
                    </button>
                </div>
            </div>
        </>
    )
}

export default S3