import React from 'react';

import './hse.css';

const Hse = (props)=>{
    return(
        <div className="hseContainer section" id={props.id}>
            <div className="hseContentContainer section-content">
                <h1>HSE &amp; Quality</h1>
                <div>
                    <h3>HSE</h3>
                    <ul>
                        <li>KS SCM Management demonstrates its commitment by integrating Health, Safety and Environment into its strategic level decisions. The holistic theme of Safety Management is developed logically and systematically, the functional operation of the company is examined in well-structured Safety Management attributes and elements. Risk quantification and control strategy formulation addressed competently. The human resource essentials for Safety Management are thoughtfully  presented through Guiding Principles -Commitment, Organization, Accountability, Management System and Standards, Risk Management, Legal and other Requirement Compliance, Training, Environmental Aspects, Continual Improvement, Monitor and Audit and Review</li>
                    </ul>

                    <p>Commitment</p>
                    <ul>
                        <li>Management at all levels of the company will be actively committed to HSE excellence.</li>
                    </ul>

                    <p>Organization</p>
                    <ul>
                        <li>we maintain and enhance a companywide organization structure and culture that recognizes the full and active participation of all employees in the systematic management of health, safety and environmental issues.</li>
                    </ul>

                    <p>Accountability</p>
                    <ul>
                        <li>Achievement of Health, Safety and Environmental excellence depends heavily on the continuing participation and accountability of the management.</li>
                    </ul>

                    <p>Risk Management</p>
                    <ul>
                        <li>We ensure the potential health, safety and environmental risks associated with all our activities are attended easily to utilize and manage adverse effects and to identify opportunities for improvement.</li>
                    </ul>

                     <h3>Quality</h3>
                     <ul>
                        <li>To satisfy our Customers requirements through continually improving our products, services, and business processes meeting statutory and regulatory provisions with the involvement of all the employees.</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default Hse;