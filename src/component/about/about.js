import React from 'react';

import './about.css';

const About = (props)=>{
    return(
        <div className="aboutContainer section" id={props.id}>
            <div className="aboutContentContainer section-content">
            <h1>About Us</h1>
                <div style={{
                        display:"flex",
                        justifyContent:"center"
                    }}>
                    <div className="aboutLeftContainer">
                    <p>Financial growth in INR lakhs</p>
                    <ul className="chart">
                            <li>
                                <span style={{height:'5%'}} title="2018-19"></span>
                            </li>
                            <li>
                                <span style={{height:'15%'}} title="2019-20"></span>
                            </li>
                            <li>
                                <span style={{height:'52%'}} title="2020-21"></span>
                            </li>
                            <li>
                                <span style={{height:'72%'}} title="2021-22"></span>
                            </li>
                        </ul>    
                </div>

                <div className="aboutRightContainer">
                    <p>KS SCM is an engineering and construction company providing  versatile and comprehensive service in power and infrastructure industries.  The core activities of the Company include three major business lines  Fabrication, Erection, Testing and Commissioning of BTG and Maintenance,  renovation and modernization of power plants and supply of components. </p>

                    <p>The company has undertaken projects of all types, sizes and in all  environments in India and abroad which Super Critical Thermal Power  Projects, Sub Critical Power Projects, Heat Recovery Steam Generator,  Waste Heat Recovery Steam Generator, maintenance, renovation,  modernization and annual maintenance of running plants. </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;