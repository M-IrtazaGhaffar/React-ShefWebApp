import React from 'react'
import "../styles/S5.css";
import Axios from "axios";

function S5() {

    const [zipCode, setzipCode] = React.useState(0)

    console.log(zipCode)

    const inputHandler = async (e) => {
        e.preventDefault()

        // if data is going to Server then:
        const url = "";
        await Axios.post(url, {
            code: zipCode
        });

        // we can also navigate to another page using react-router-dom!
    }

    return (
        <>
            <div className="s5-all">
                <div className="s5-head">
                    <h1>
                        Ready to order?
                    </h1>
                </div>
                <div className="s5-desc">
                    <p>
                        Dishes worth traveling for, made just a few streets away.
                    </p>
                </div>
                <div className="s5-input">
                    <form method="post">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <input type="number" onChange={(e) => setzipCode(e.target.value)} name="zip_code" placeholder='Enter Your ZIP Code' max={9999999999} required />
                        <button type='submit' onClick={inputHandler}>
                            Find Food
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default S5