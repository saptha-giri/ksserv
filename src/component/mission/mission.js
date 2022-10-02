import React from 'react';

import './mission.css';
import img from '../../assets/3.png';

const Mission = (props)=>{
    return(
        <div className="missionContainer section" id={props.id}>
            <div className="section-content missionContent">
                <h1>Our Mission & Vision</h1>

                <div className="missions">
                    <div className="missiLeft">
                        <img alt="vision" src = {img} />
                    </div>
                    <div className="missi">

                        <div className="missi-heading">
                            <h3>Mission</h3>
                        </div>
                        <div>
                            <ul className="missi-list">
                                <li>To be an outstanding company and dominant player among the peers and delight the customers through products and services with continuous improvement.</li>
                            </ul>
                        </div>

                        <div className="missi-heading">
                            <h3>Vision</h3>
                        </div>
                        <div>
                            <ul className="missi-list">
                                <li>Maintain high standards in workmanship, meet customer requirements to the brim, achieve timely completion of projects by adopting innovative methods and planning, enhance organizational skills through periodic training and retention of Human resources and tireless pursuit for excellence all the time.</li>
                            </ul>
                        </div>

                        <div className="missi-heading">
                            <h3>Quality</h3>
                        </div>
                        <div>
                            <ul className="missi-list">
                                <li>KS SCM, in its quest to be the leader among ETC and SERVICES companies is committed to achieve continual improvement in its products, services and performance to enhance customer satisfaction through improved level of quality and conforming to its contractual obligations and induce quality awareness at all levels of employees by imparting training, improving attitude, enhancing motivation and encouraging total involvement.</li>
                            </ul>
                        </div>

                        <div className="missi-heading">
                            <h3>Safety</h3>
                        </div>
                        <div>
                            <ul className="missi-list">
                                <li>KS SCM, is committed to maintain higher standard in occupational Health, Safety and Environment protection even while pursuing quality works and comply with all safety norms, procedures and statutory rules and impart functional responsibility at all levels, educate train and motivate everyone associated with the company to achieve the goal of 'Zero incident'.</li>
                            </ul>
                        </div>

                    </div>
                                        
                </div>

            </div>
        </div>
    );
}

export default Mission