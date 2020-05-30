import React, { Component } from "react";

const userHome = () => {
    return (
        <div>
            <div className="home">
                <img src="/images/logo-white.png" />
            </div>
            <div className="uk-child-width-1-2@m uk-margin uk-margin" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">About us</h3>
                            <p>“Travel is the main thing you purchase that makes you more extravagant”. We, at Alambic, swear by this and put stock in satisfying travel dreams that make you perpetually rich constantly.</p>
                        </div>
                        <div className="uk-card-media-bottom">
                            <img src="images/light.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Why choose us?</h3>
                            <p>We love to travel and we want to share our excitement with you. We’re passionate about connecting you with local organizers to enrich your life with unforgettable trips.</p>
                        </div>
                        <div className="uk-card-media-bottom">
                            <img src="images/light.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default userHome;