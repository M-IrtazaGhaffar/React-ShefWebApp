import React from 'react'
import "../styles/S4.css"
import img2 from "../images/img-2.jpg";

function S4() {
  return (
    <>
    <div className="s4-all">
        <div className="s4-img">
            <img src={img2} alt="" />
        </div>
        <div className='s4-details'>
            <h2>
            Food safety
            </h2>
            <p>
            At Shef, we are committed to helping ensure that your food will always be safe to eat. All shefs are required to pass an accredited food safety certification exam and comply with all local laws and regulations. In regions that have not yet implemented home cooking laws, shefs are required to cook out of commercial kitchens or other legally permissible facilities.
            </p>
        </div>
    </div></>
  )
}

export default S4