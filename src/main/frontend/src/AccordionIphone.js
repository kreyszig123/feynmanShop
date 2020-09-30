import React from 'react'

function AccordionIphone() {
    return (
        <div id="accordion">
                  
                <div className="card">
                        <div className="card-header" role="tab" id="itechhead">
                            <h3 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" data-target="#itech">
                                    <small>Technical Specifications</small>
                                </a>
                            </h3>
                        </div>
                        <div className="collapse" id="itech" data-parent="#accordion">
                            <div className="card-body">
                              <p className="d-none d-sm-block">
                                  <ul>
                                      <li>Liquid Retina HD display</li>
                                      <li>6.1‑inch (diagonal) all-screen LCD Multi-Touch display with IPS technology</li>
                                      <li>1792‑by‑828‑pixel resolution at 326 ppi</li>
                                      <li>1400:1 contrast ratio (typical)</li>
                                      <li>True Tone display</li>
                                      <li>Wide color display (P3)</li>
                                      <li>Haptic Touch</li>
                                      <li>625 nits max brightness (typical)</li>
                                      <li>Fingerprint‑resistant oleophobic coating</li>
                                      <li>Support for display of multiple languages</li>
                                  </ul>
                              </p>
                            </div>
                        </div>
                </div>
                <div className="card">
                        <div className="card-header" role="tab" id="iboxhead">
                            <h3 className="mb-0">
                                <a className="collapsed" data-toggle="collapse" data-target="#ibox">
                                    <small>What's in the box</small>
                                </a>
                            </h3>
                        </div>
                        <div className="collapse" id="ibox" data-parent="#accordion">
                            <div className="card-body">
                              <p className="d-none d-sm-block">
                                  <ul>
                                      <li>iPhone with iOS 13</li>
                                      <li>EarPods with Lightning Connector</li>
                                      <li>Lightning to USB Cable</li>
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

export default AccordionIphone
