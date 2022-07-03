import React from "react";
import image1 from "../assets/img/card_1.jpg";
import image2 from "../assets/img/card_2.jpg";
import image3 from "../assets/img/card_3.jpg";
import image4 from "../assets/img/card_4.jpg";

let ContryCard = (props) => {
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={image1} alt=""/>
                        <h2>Gadget</h2>
                        <p>You can find some really cool and professional gadget</p>
                        <button className="btn btn-dark btn-sm">Read More</button>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={image2} alt=""/>
                        <h2>Gadget</h2>
                        <p>You can find some really cool and professional gadget</p>
                        <button className="btn btn-dark btn-sm">Read More</button>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={image3} alt=""/>
                        <h2>Gadget</h2>
                        <p>You can find some really cool and professional gadget</p>
                        <button className="btn btn-dark btn-sm">Read More</button>
                        <div className="card-body"></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow-lg">
                        <img src={image4} alt=""/>
                        <h2>Gadget</h2>
                        <p>You can find some really cool and professional gadget</p>
                        <button className="btn btn-dark btn-sm">Read More</button>
                        <div className="card-body"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContryCard;