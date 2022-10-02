import React from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  

import iso2018 from '../../assets/2018.png'
import iec from '../../assets/iec.png'
import iso2015 from '../../assets/2015.jpg'
import mocf from '../../assets/mocf.png'
import './about.css';



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
  

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    //   title: {
    //     display: true,
    //     text: 'Financial growth in INR Millions',
    //   },
    },
  };
  
  const labels = ['2018-19', '2019-20', '2020-21', '2021-22'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Growth',
        data: [10,20,30,40,50],
        backgroundColor: '#027F3D',
      }
    ],
  };

const About = (props) => {
    return (
        <div className="aboutContainer section" id={props.id}>
            <div className="aboutContentContainer section-content">
                <h1>About Us</h1>
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div className="aboutLeftContainer">
                        <p>Financial growth in INR Millions</p>
                        <Bar options={options} data={data} />
                    </div>

                    <div className="aboutRightContainer">
                        <p>KS SCM is engineering and construction companies formally known as KS SERVICES providing versatile and comprehensive service in power and infrastructure industries. The core activities of the Company include three major business lines Fabrication, Erection, Testing and Commissioning of BTG ,FGD and Maintenance, renovation and modernization of power plants and supply of components.</p>

                        <p>The company has undertaken projects of all types, sizes and in all environments in India and abroad Super Critical Thermal Power Projects, Sub Critical Power Projects, Heat Recovery Steam Generator, Waste Heat Recovery Steam Generator, maintenance, renovation, modernization and annual maintenance of running plants.</p>
                    </div>
                </div>

                <div className='imgContainer'>
                    <img className='imgStyle' src={iso2018} alt='2018' />
                    <img className='imgStyle' src={iso2015} alt='2018' />
                    <img className='imgStyle' style={{
                        height:'50px'
                    }} src={iec} alt='2018' />
                    <img className='imgStyle' src={mocf} alt='2018' />
                </div>


            </div>
        </div>
    );
}

export default About;