import React from 'react'
import './ImageLinkForm.css'

const Recognition = ({ imageUrl, facebox }) => {
  // console.log(facebox);
  return (
    <div className="tc ma3" style={{ position: "relative" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <img id="imageid" src={imageUrl} alt=""
          style={{ width: "300px", height: "300px" }} />

        <div className="bounding-box"
          style={{ top: facebox.topRow, right: facebox.rightCol, bottom: facebox.bottomRow, left: facebox.leftCol }}>
        </div>
      </div>
    </div>
  )
}

export default Recognition;