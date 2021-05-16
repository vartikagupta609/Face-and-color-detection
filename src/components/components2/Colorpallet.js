import React from 'react'
import '../ImageLinkForm.css'

const Colorpallet=({cname,cname1,cname2,cname3})=>{
      return(
       <div className="dib tc .w3" >
           {/*<h4 className="dib tc">COLOUR</h4>*/}
           <table className="pa3 f4">
               {/*<h1>hi</h1>*/}
               <thead className="f4 ma2">
                   <th>COLOUR</th>
                   </thead>
                  
               <tr style={{background:cname}}>
                   <td>{cname}</td>
                   
               </tr>  
                <tr style={{background:cname1}}>
                   <td>{cname1}</td>
                  
               </tr>  
                <tr style={{background:cname2}}>
                   <td>{cname2}</td>
                  
               </tr>  
                <tr style={{background:cname3}}>
                   <td>{cname3}</td>
                   
               </tr>    
               </table>
       </div>
      )
}

export default Colorpallet;