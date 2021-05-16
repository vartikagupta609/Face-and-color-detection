import React from 'react'
import '../ImageLinkForm.css'

const Recognitionfood = ({ imageUrl}) => {
  // console.log(facebox);
  return (
    <div className="tc ma3">
        <img id="imageid" src={imageUrl} alt=""
          style={{ width: "300px", height: "auto" }} />
      </div>

  )
}

export default Recognitionfood;