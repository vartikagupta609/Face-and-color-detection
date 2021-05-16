import React from 'react'
import '../ImageLinkForm.css'

const Recognitioncolor = ({imageUrl}) => {
  return (
    <div className="dib tc ma2 ">
        <img id="imageid" src={imageUrl} alt=""
          style={{ width: "300px", height: "auto"}} />
      </div>

  )
}

export default Recognitioncolor;