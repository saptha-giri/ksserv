import React from 'react';

import './gallery.css';

import img1 from '../../assets/KS Gallery/1.jpg';
import img2 from '../../assets/KS Gallery/2.png';
import img3 from '../../assets/KS Gallery/3.jpg';
import img4 from '../../assets/KS Gallery/4.jpg';
import img5 from '../../assets/KS Gallery/5.jpg';
import img6 from '../../assets/KS Gallery/6.JPG';

import img7 from '../../assets/KS Gallery/7.JPG';
import img8 from '../../assets/KS Gallery/8.JPG';
import img9 from '../../assets/KS Gallery/9.jpg';
import img10 from '../../assets/KS Gallery/10.jpg';
import img11 from '../../assets/KS Gallery/11.jpg';
import img12 from '../../assets/KS Gallery/12.jpg';

import img13 from '../../assets/KS Gallery/13.jpg';
import img14 from '../../assets/KS Gallery/14.jpg';
import img15 from '../../assets/KS Gallery/15.jpg';

const Gallery = (props)=>{
	return(
		<div className="grid-container section" id={props.id}>
			<div className="mobile-grid">
				<div className="full-width-container over-effect">
					<img alt="hairCare" className='image-style' src={img1} />
				</div>
			</div>
            <div className="section-content galleryHeader" >
            <h1>Gallery</h1>
            </div>
			<div className="grid-inner-container">
				<div className="full-width-container over-effect desktop" >
					<img alt="hairCare" className='image-style' src={img1} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="essentialOil" className='image-style' src={img2} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="skincare" className='image-style' src={img3} />
				</div>
			</div>

			<div className="grid-inner-container">
				<div className="half-width-container over-effect" >
					<img alt="kits" className='image-style' src={img4} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="faceCare" className='image-style' src={img5} />
				</div>
				<div className="full-width-container over-effect desktop">
					<img alt="bodyCare" className='image-style' src={img6} />
				</div>
			</div>

            <div className="grid-inner-container">
				<div className="full-width-container over-effect desktop">
					<img alt="bodyCare" className='image-style' src={img9} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="kits" className='image-style' src={img7} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="faceCare" className='image-style' src={img8} />
				</div>
			</div>

            <div className="grid-inner-container">
				<div className="half-width-container over-effect" >
					<img alt="kits" className='image-style' src={img10} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="faceCare" className='image-style' src={img11} />
				</div>
				<div className="full-width-container over-effect desktop">
					<img alt="bodyCare" className='image-style' src={img12} />
				</div>
			</div>

            <div className="grid-inner-container">
				<div className="full-width-container over-effect desktop">
					<img alt="bodyCare" className='image-style' src={img15} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="kits" className='image-style' src={img13} />
				</div>
				<div className="half-width-container over-effect" >
					<img alt="faceCare" className='image-style' src={img14} />
				</div>
			</div>


			<div className="mobile-grid">
				<div className="full-width-container over-effect" >
					<img alt="bodyCare" className='image-style' src={img6} />
				</div>
			</div>
		</div>
	);
}

export default Gallery;