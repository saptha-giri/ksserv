import React from 'react';

import './contact.css';

const Contact = (props)=>{
    return(
        <div className="contactContainer section" id={props.id}>
            <div className="contact-content section-content" >
                <h1>Contact</h1>
                <div className="details-container">
                        <div className="left-contact">
                            <div className="form-items">
                                <h3>Reginal Office </h3>
                                <p>B-1 SAI KAMALAM ENCLAVE  <br/>PLOT NO 3&4  MAHALAKSHMI NAGAR GUDUVANCHERY<br/>Chennai -603210 INDIA</p>
                                <p><i className="fa fa-phone fa-lg" aria-hidden="true"></i> &nbsp;: 91 (0) 044-32220757<br/>
                                <i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;: ksscm@ksscmengg.com</p>
                            </div>
                            <div className="form-items">
                            <h3>Factory Address </h3>
                            <p>F.No - 90/18A, Velupatty Road,  Vendayampatti (Po),<br/>Tanjore - 613 402,<br/>Tamil Nadu INDIA</p>
                            <p><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;: ksscm@ksscmengg.com</p>
                            </div>

                        </div>
                        <div className="right-contact">
                            <div className="right-content">
                                <div className="cDetails">
                                    <h3>V.NATARAAJAN - Managing Director</h3>
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;  svnraj@ksscmengg.com <br/>
                                    <i className="fa fa-mobile fa-2x" aria-hidden="true"></i> &nbsp;  +91-7397105010<br/></p>
                                    {/* <i className="fa fa-phone fa-lg" aria-hidden="true"></i> &nbsp;+91-9444000569</p> */}
                                </div>

                                <div className="cDetails">
                                    <h3>NV NAMBIAR - Director</h3>
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;  nambiar@ksscmengg.com <br/>
                                    <i className="fa fa-mobile fa-2x" aria-hidden="true"></i> &nbsp;  +91-9176060757</p>
                            </div>
                            
                            <div className="cDetails">
                                    <h3>THEN TAMIL SELVI - Director</h3>
                                    <p><i className="fa fa-envelope" aria-hidden="true"></i> &nbsp;  thentamilselvi@ksscmengg.com <br/></p>
                                    {/* <i className="fa fa-mobile fa-2x" aria-hidden="true"></i> &nbsp;  +91-9176060757 */}
                            </div>
                            

                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;