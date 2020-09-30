import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 offset-1 col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            54, Cocoa University<br />
                            Longside Road, Iowa <br />
                            Quantum Galaxy, Multiverse<br />
                        </address>
                        <i className="fa fa-phone fa-lg"></i> : +225 3577 5678<br/>
		              <i className="fa fa-fax fa-lg"></i>: +225 3577 4321<br/>
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:rpfeynman@qed.net">rpfeynman@qed.net</a>
                            
                        
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                      <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus fa-lg"></i></a>
                      <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-lg"></i></a>
                      <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-lg"></i></a>
                      <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-lg"></i></a>
                      <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube fa-lg"></i></a>
                      <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o fa-lg"></i></a>
                    </div>
                </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
