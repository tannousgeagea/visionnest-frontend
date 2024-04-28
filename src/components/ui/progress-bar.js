import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './progress-bar.css'

const ProgressBar = (props) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${ props.value }%`}}>
                <span>
                    {Math.round(props.value)}%
                </span>
            </div>
        </div>
    )
}

export default ProgressBar