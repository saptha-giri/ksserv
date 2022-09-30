import React from 'react';
import cert1 from '../../assets/cert/1.jpg'
import cert2 from '../../assets/cert/2.jpg'
import cert3 from '../../assets/cert/3.jpg'
import cert4 from '../../assets/cert/4.jpg'
import './style.css';

const Certificate = (props) => {
    return (
        <div className="certContainer section" id={props.id}>
            <div className="innerCert section-content">
                <h1>Certificate</h1>
                <div>
                    <img className='cert' src={cert1 } alt=''/>
                    <img className='cert' src={cert2 } alt=''/>
                </div>

                <div>
                    <img className='cert' src={cert3 } alt=''/>
                    <img className='cert' src={cert4 } alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Certificate;