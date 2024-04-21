import React from "react";
import './feature-card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function FeatureCard ({title, description, icon}) {
    return (
        <div className="feature-card-block">
            <div className="feature-card-top">
                <img src={icon} alt="Feature icon" className="card-icon"/>
                <h3 className="feature-card-heading">{title}</h3>
            </div>
            <ul className="card-text">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li> // Each item is a bullet point
                    ))}
            </ul>


        </div>
    )
}


export default FeatureCard