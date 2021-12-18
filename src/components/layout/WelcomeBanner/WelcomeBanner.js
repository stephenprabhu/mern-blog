import React from 'react';
import BackgroundImage from '../../../assets/images/bg_1.jpg';
import AuthorImage from '../../../assets/images/author.png';



const WelcomeBanner = () => {
    return (
        <div className="hero-wrap js-fullheight" style={{backgroundImage: `url(${BackgroundImage})`}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="js-fullheight d-flex justify-content-center align-items-center">
                <div className="col-md-8 text text-center">
                    <div className="img mb-4" style={{backgroundImage: `url(${AuthorImage})`}}></div>
                    <div className="desc">
                        <h2 className="subheading">Hello I'm</h2>
                        <h1 className="mb-4">Stephen Prabhu</h1>
                        <p className="mb-4">I'm Stephen And I Created This Blog To Express Some Of My Random, Wierd and Sometimes Interesting Thoughts. I Work As A Web Developer And Run This Blog In My Spare Time.</p>
                        <p><a href="/about" className="btn-custom">More About Me <i className="icon-arrow-right"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeBanner
