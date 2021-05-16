import React from 'react'
import './ImageLinkForm.css'

const Imageurl =({onSubmit,onInputChange})=>{
    return(
      <div>
        <p className = "f2 tc" >
          FaceAI will detect faces in your picture. Try it now!
        </p>
       <div className="alignCenter">
          <div className="form">
            <input type="text" className=" w-75 pa2 center" placeholder="Enter Image URL" onChange={onInputChange}/>
            <button className="w-20 grow f4 ph4 pv2 dib white bg-light-purple pointer" onClick={onSubmit}>Detect</button>
          </div>
       </div>
     </div>
      )
}

export default Imageurl;