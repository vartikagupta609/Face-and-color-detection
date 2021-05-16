import React from 'react'
import Imageurlcolor from './Imageurlcolor'
import tachyons from 'tachyons'
import Clarifai from 'clarifai';
import Recognitioncolour from './Recognitioncolour'
import Colorpallet from './Colorpallet'
import Particles from 'react-particles-js';

const particlesEffect={
	   "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}

const app = new Clarifai.App({
    apiKey: '2e8692f8bd57406eaa0249eda59cda0e'
   });

class Appcolor extends React.Component{
    constructor(){
    super()
        this.state={
            input:"",
            imageUrl:"",
            cname:"",
            cname1:"",
            cname2:"",
            cname3:"",
        }
    }
    
    onInputChange = (event) => {
    this.setState({input : event.target.value});
    // const name=event.target.value.name;
     console.log(event.target.value)
  }
  calculateName=(data)=>{
      this.setState({cname:data.outputs[0].data.colors[0].w3c.name});
       this.setState({cname1:data.outputs[0].data.colors[1].w3c.name});
        this.setState({cname2:data.outputs[0].data.colors[2].w3c.name});
        this.setState({cname3:data.outputs[0].data.colors[3].w3c.name});
      console.log(data.outputs[0].data.colors[0].w3c.name);
  }

    onSubmit=()=>{
        this.setState({imageUrl: this.state.input});
  
   //colour detection model
     app.models
       .predict(
         'eeed0b6733a644cea07cf4c60f87ebb7',this.state.input)
       .then(response => {
        //  console.log(response)
         this.calculateName(response);
       
       })
       .catch(err => console.log(err));

    
    }
render(){
    return(
        <div className="tc">
         <Particles params={particlesEffect} className="particles"/>
         <Imageurlcolor onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
         <Recognitioncolour imageUrl={this.state.imageUrl}/>
         <Colorpallet cname={this.state.cname} cname1={this.state.cname1} cname2={this.state.cname2} cname3={this.state.cname3}/>
        </div>
    )
  }

  }

export default Appcolor;