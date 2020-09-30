import React from 'react'
import './Jumbotron.css';

function Jumbotron() {
    return (
        <header className="jumbotron">
        <div className="container">
            <br/><br/>
            <div className="row row-header">
                <div className="col-12 col-sm-4 offset-1">
                    <h1 className="display-4">feynmanShop</h1>
                    <p> Get deals on the latest items.<br/>
                    What are you waiting for?! </p>  
                    <h4>Shop Now</h4>  
                </div>
                <div className="col-12 col-sm-3 align-self-center">
                  <img src="https://cdn3.iconfinder.com/data/icons/abstract-lines/100/abstract_lines_triangle_3-512.png" className="img-fluid" height="80" width="80" alt="logo"/>
                </div>

                <div className="col-12 col-sm-3 align-self-center">
                  <button type="button" className="btn btn-warning" id="reserveBtn">Explore</button>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Jumbotron
