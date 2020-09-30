import React from 'react'

function AccordionJbl() {
    return (
        <div id="accordion">
                  
                <div className="card">
                        <div className="card-header" role="tab" id="jtechhead">
                            <h3 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" data-target="#jtech">
                                    <small>Technical Specifications</small>
                                </a>
                            </h3>
                        </div>
                        <div className="collapse" id="jtech" data-parent="#accordion">
                            <div className="card-body">
                              <p className="d-none d-sm-block">
                                  <ul>
                                      <li>Waterproof</li>
                                      <li>Wired/Wireless</li>
                                      <li>Bluetooth 4.2</li>
                                      <li>Frequency Response 70 - 20000 Hz</li>
                                      <li>Amplification Type Active</li>
                                      <li>Signal-To-Noise Ratio 80 dB</li>
                                  </ul>
                              








                              </p>
                            </div>
                        </div>
                </div>
                <div className="card">
                        <div className="card-header" role="tab" id="jboxhead">
                            <h3 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" data-target="#jbox">
                                    <small>What's in the box</small>
                                </a>
                            </h3>
                        </div>
                        <div className="collapse" id="jbox" data-parent="#accordion">
                            <div className="card-body">
                              <p className="d-none d-sm-block">
                                  <ul>
                                      <li>JBL Flip 4</li>
                                      <li>USB Power Adapter</li>
                                      <li>Documentation</li>
                                  </ul>
                              </p>
                            </div>
                        </div>
                </div>
                    

            </div>
    )
}

export default AccordionJbl
