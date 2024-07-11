import React from 'react'
import image from "../displayImage/image1.jpg"
import { useNavigate } from "react-router-dom";

export function Display() {
  const navigate = useNavigate()

  return (
    <div className="display-container">
      <div className="displayPage">
        <div className="displayImg">
          <img src={image} alt="img" />
          <button onClick={() => navigate('/')} >Back</button>
        </div>
      </div>
    </div>
  )
}


