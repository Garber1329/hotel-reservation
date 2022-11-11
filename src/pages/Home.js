import React from 'react';
import {baseUrl} from "../store/baseUrl";

function Home() {

    return (
        <div>
            <div className="home-header position-relative overflow-hidden p-3 p-md-5 text-center">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="logo display-4 fw-normal">Luxury Hotel</h1>
                    <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing
                        efforts with this example based on Apple’s marketing pages.</p>
                    <div className="btn btn-outline-secondary">Coming soon</div>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                <img className="home-header__background" src={baseUrl + "images/Evening.webp"} alt=""/>
            </div>
        </div>
    );
}

export default Home;