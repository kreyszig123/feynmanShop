import React,{useState,useEffect} from 'react';
import './App.css';
import HeaderIndex from "./HeaderIndex";
import Jumbotron from "./Jumbotron"
import JumbotronProduct from "./JumbotronProduct"
import Carousel from "./Carousel"
import HeaderShop from "./HeaderShop"
import AccordionIphone from "./AccordionIphone"
import AccordionJbl from "./AccordionJbl"
import Footer from "./Footer";
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


const Product1=()=>{
 
  const [colour, setColour]=useState("red");
  const [size, setSize]=useState("32");
  const [details, setDetails]=useState([]);
  const [count, setCount]=useState(0);

  const sendRequirements=()=>{
    axios.get("http://localhost:8080/1/",{ params: {
      "colour":colour,
      "size":size
    }}).then(res=>{
      setDetails(res.data);
    })
  }
  useEffect(()=>{
    sendRequirements();
  },[colour,size]);

  
  

  

  return (
    
    <div className="container">
      <div className="row row-header">
        <div className="col-12 col-sm-6">
             <img src="https://cdn.mos.cms.futurecdn.net/AMy8yKfkz6jcitetyzPLXi-1200-80.jpg" className="img-fluid" height="400" width="400" alt="iphone"/>
        </div>
        <div className="col-12 col-sm-6 align-self-center">
            <br/>
            <h1>Apple Iphone 11</h1>
          
          <p>
          All-new dual-camera system with Ultra Wide. Night mode and stunning video quality.
          Water and dust resistance. All-day battery life. In 3 stunning colours. Experience iPhone at 11.
          </p>
          <br/>
          <p>
            <b>Discounted price(if applicable) will be reflected at the shopping cart page.</b>
          </p>
          <p>
          <span className="badge badge-danger">Promotion</span><br/>
          Purchase ONLINE for another $30 off this phone
          </p>
          <br/>

          <span className="badge badge-warning">Choose a Color</span><br/>
          <div className="row row-header">
            <div className="col-12 col-sm-2 align-self-center" >
              <button type="button" className="btn btn-danger" onClick={()=>setColour("red")}>Red</button>
            </div>   
            <div className="col-12 col-sm-2 align-self-center" >
              <button type="button" className="btn btn-primary" onClick={()=>setColour("blue")}>Blue</button>
            </div>
            <div className="col-12 col-sm-2 align-self-center" >
              <button type="button" className="btn btn-dark" onClick={()=>setColour("black")}>Black</button>
            </div>
          </div><br/>
          <span className="badge badge-secondary">Choose a Size</span><br/>
          <div className="row row-header">
            <div className="col-12 col-sm-2 align-self-center" onClick={()=>setSize("32")}>
              <button type="button" className="btn btn-light">32 GB</button>
            </div>   
            <div className="col-12 col-sm-2 align-self-center" onClick={()=>setSize("64")}>
              <button type="button" className="btn btn-light">64 GB</button>
            </div>
            <div className="col-12 col-sm-2 align-self-center" onClick={()=>setSize("128")}>
              <button type="button" className="btn btn-light">128 GB</button>
            </div>
          </div>
          <br/>
          <div>
              <h5>Price:</h5>
              $ {details[1]}          
              <h5>Available:</h5>{details[0]}
          </div>
          <br/>
          <div>
            <h5>I want:</h5>
            <button type="button" className="btn btn-light" onClick={()=>{if(count>0)setCount(count-1);}}>-</button>
            {count}
            <button type="button" className="btn btn-light" onClick={()=>{if(count<details[0])setCount(count+1);}}>+</button>
            
          </div>
          <br/>
          <div>
            <h5>Total:</h5>
            $ {details[1]*count}
          </div>
          <br />
          <button type="button" className="btn btn-warning">Checkout</button>
          
          
          
            
          

        </div>

        
    </div><br/>
   <AccordionIphone />
  </div>
  )

  
  
};
const Product2=()=>{

  const [colour, setColour]=useState("black");
  const [size, setSize]=useState("large");
  const [details, setDetails]=useState([]);
  const [count, setCount]=useState(0);

  const sendRequirements=()=>{
    axios.get("http://localhost:8080/2/",{ params: {
      "colour":colour,
      "size":size
    }}).then(res=>{
      setDetails(res.data);
    })
  }
  useEffect(()=>{
    sendRequirements();
  },[colour,size]);

  return (
    <div className="container">
      <div className="row row-header">
        <div className="col-12 col-sm-6">
             <img src="https://cdn.mos.cms.futurecdn.net/Vrv5TBT8UkrbcUj4jEyHj4-480-80.jpg" className="img-fluid" height="400" width="400" alt="iphone"/>
        </div>
        <div className="col-12 col-sm-6 align-self-center">
            <br/>
            <h1>JBL Flip 4</h1>
          
          <p>
            <ul>
              <li>Wireless Bluetooth streaming</li>
              <li>5 hours of playtime</li>
              <li>Waterproof design</li>
              <li>Speakerphone</li>
              <li>Audio cable input</li>
            </ul>
          </p>
          <br/>
          <p>
            <b>Discounted price(if applicable) will be reflected at the shopping cart page.</b>
          </p>
          <p>
          <span className="badge badge-danger">Promotion</span><br/>
          Purchase ONLINE for another $3 off this speaker
          </p>
          <br/>
          <span className="badge badge-warning">Choose a Color</span><br/>
          <div className="row row-header"> 
            <div className="col-12 col-sm-2 align-self-center">
              <button type="button" className="btn btn-primary" onClick={()=>setColour("blue")}>Blue</button>
            </div>
            <div className="col-12 col-sm-2 align-self-center" >
              <button type="button" className="btn btn-dark" onClick={()=>setColour("black")}>Black</button>
            </div>
          </div><br/>
          <span className="badge badge-secondary">Choose a Size</span><br/>
          <div className="row row-header">
            <div className="col-12 col-sm-2 align-self-center">
              <button type="button" className="btn btn-light" onClick={()=>setSize("small")}>Small</button>
            </div>   
            <div className="col-12 col-sm-2 align-self-center">
              <button type="button" className="btn btn-light" onClick={()=>setSize("large")}>Large</button>
            </div>
          </div>
          <br/>
          <div>
              <h5>Price:</h5>
              $ {details[1]}          
              <h5>Available:</h5>{details[0]}
          </div>
          <br/>
          <div>
            <h5>I want:</h5>
            <button type="button" className="btn btn-light" onClick={()=>{if(count>0)setCount(count-1);}}>-</button>
            {count}
            <button type="button" className="btn btn-light" onClick={()=>{if(count<details[0])setCount(count+1);}}>+</button>
          </div>
          <br/>
          <div>
            <h5>Total: </h5>
            $ {details[1]*count}
          </div>
          <br />
          <button type="button" className="btn btn-warning">Checkout</button>
          
            
          

        </div>

        
    </div><br/>
    <AccordionJbl />
  </div>
  )
  
  
};

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/iphone">
          
          <HeaderShop />
          <JumbotronProduct />
            
            <Product1 />
            <Footer />
          </Route>
          <Route path="/jbl">
          <HeaderShop />
          <JumbotronProduct />
            
            <Product2 />
            <Footer />
          </Route>
          <Route path="/">
            <HeaderIndex />
            <Jumbotron />
            <container>
              <Carousel />
            </container>
            
            <br/>
            <Footer />
          </Route>
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
