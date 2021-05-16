import React from 'react'
// import './App.css'
import Imageurlfood from './ImageUrlFood'
import tachyons from 'tachyons'
import Clarifai from 'clarifai';
 import Recognitionfood from './Recognitionfood'
import Particles from 'react-particles-js';

const particlesEffect={
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}

const app = new Clarifai.App({
    apiKey: '2e8692f8bd57406eaa0249eda59cda0e'
   });

class Appfood extends React.Component{
    constructor(){
    super()
        this.state={
            input:"",
            imageUrl:"",
            cname:"",
            // box:{}
          
        }
    }
    
    onInputChange = (event) => {
    this.setState({input : event.target.value});
    // const name=event.target.value.name;
     console.log(event.target.value)
  }
 calculateName=(data)=>{
      this.setState({cname:data.outputs[0].data.concepts[0].name});
      //const cname=data.outputs[0].data.regions[0].data.concepts[0].name;
      console.log(data.outputs[0].data.concepts[0].name);
 }

    onSubmit=()=>{
        this.setState({imageUrl: this.state.input});      
           //food detection model
    app.models
       .predict(
         'bd367be194cf45149e75f01d59f77ba7',this.state.input)
       .then(response => {
          //console.log(response)
          this.calculateName(response);
        // this.displayFaceBox(this.calculateFaceLocation(response));
       })
       .catch(err => console.log(err));
    
    }
render(){
    return(
        <div>
         <Particles params={particlesEffect} className="particles"/>
         <Imageurlfood onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
         <Recognitionfood imageUrl={this.state.imageUrl}/>
         <h2 className="tc">{this.state.cname.toUpperCase()}</h2>
        </div>
    )
  }

  }

export default Appfood;