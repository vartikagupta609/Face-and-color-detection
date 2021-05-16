import React from 'react'
import './App.css'
import Imageurl from './components/Imageurl'
import tachyons from 'tachyons'
import Clarifai from 'clarifai';
import Recognition from './components/Recognition'
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
	            "value": 7,
	            "random": true,
	            "anim": {
	                "speed": 6,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}


const app = new Clarifai.App({
    apiKey: '2e8692f8bd57406eaa0249eda59cda0e'
   });

class App extends React.Component{
    constructor(){
    super()
        this.state={
            input:"",
            imageUrl:"",
            cname:"",
            box:{}
          
        }
    }
    
    onInputChange = (event) => {
    this.setState({input : event.target.value});
 
  }
  calculateName=(data)=>{
    //  this.setState({cname:data.outputs[0].data.regions[0].data.concepts[0].name});
      //cname=data.outputs[0].data.regions[0].data.concepts[0].name;
   //   console.log(data.outputs[0].data.regions[0].data.concepts[0].name);
      const clarifaiFace =data.outputs[0].data.regions[0].region_info.bounding_box;
      console.log(clarifaiFace);
      const image=document.getElementById("imageid")
      const height=Number(image.height);
      const width=Number(image.width);
      console.log(height,width);
      let maindim={
     leftCol : clarifaiFace.left_col * width,
      topRow  : clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
         
      }
      return maindim;
  }
  displayBoxDimension=(box)=>{
      this.setState({box:box})
      console.log("Hellnonl")
      console.log(box)
  }
  
    onSubmit=()=>{
        this.setState({imageUrl: this.state.input});
      //  console.log("Hellllo");
        app.models
            .predict('a403429f2ddf4b49b307e318f00e528b',this.state.input)
            .then(response=>{
                this.displayBoxDimension(this.calculateName(response))
            })
            .catch(error=>console.log(error))
    }
    
render(){
    return(
        <div>
              <Particles params={particlesEffect} className="particles"/>
         <Imageurl onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
         <Recognition imageUrl={this.state.imageUrl} facebox={this.state.box}/>
         <p className="tc">{this.state.cname}</p>
        </div>
    )
  }

}

export default App;