import React from 'react'
import './Carousel.css';

function Carousel() {
    return (
        <div className="row row-content">
        <div className="col">
          <div className="carousel slide" id="mycarousel" data-ride="carousel">
            <div className="carousel-inner" role="listbox">

              <div className="carousel-item active">
                <img className="d-block img-fluid" src="https://scdn.slashgear.com/wp-content/uploads/2019/10/apple-iphone-11-9.jpg" alt="uthappizza" />
                <div className="carousel-caption d-none d-md-block">
                    <a className="nav-link" href="/iphone">
                    <h2>Apple Iphone 11                     
                    <span className="badge badge-danger">9.0</span></h2>
                    </a>
                    <p className="d-none d-sm-block">Even faster speed, improved battery life. The iPhone 11's cameras get an excellent new Night Mode and an ultrawide-angle camera that can add extra detail in photos. Fantastic video camera.</p>

                </div>
              </div>
              <div className="carousel-item">
                  <img className="d-block img-fluid" src="https://i.ytimg.com/vi/sYTHMIwuTTU/maxresdefault.jpg" alt="buffet"/>
                  <div className="carousel-caption d-none d-md-block">
                      <a className="nav-link" href="/jbl">
                      <h2>JBL Flip 4 
                        <span className="badge badge-danger">9.5</span></h2>
                      </a>
                    
                    <p className="d-none d-sm-block">The JBL Flip series is one of the most popular lines of Bluetooth speakers for a few reasons. The most important of which being that every Flip speaker could be had for less than $100. </p>

                  </div>
              </div>
              


            </div>

            <ol className="carousel-indicators">
              <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
              <li data-target="#mycarousel" data-slide-to="1"></li>

            </ol>
            <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
              
          </div>
        </div>
      </div>
    )
}

export default Carousel
