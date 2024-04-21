import React from "react";
import FeatureCard from "./feature-card";

import './features.css'
import imageIcon from '../../assets/icons/image.png'
import videoIcon from '../../assets/icons/upload.png'
import chatIcon from '../../assets/icons/chat.png'

function Features () {
    return (
        <div className="home-features-section">
            <div className="features-container">
                <h1 className="feature-heading">
                    Features
                </h1>

                <h2 className="feature-subtext">
                    Everything you need to know about your data
                </h2>

                <div className="feature-split">
                    <FeatureCard
                        title="Image Upload & Analysis"
                        description={[
                            "Upload unlimited images",
                            "Analyze content using advanced computer vision techniques",
                            "Detailed statistic of your data",
                            "Full control over privacy settings"
                        ]}
                        icon={imageIcon}
                    />
                    <FeatureCard
                        title="Media Upload & Analysis"
                        description={[
                            "Upload unlimited images",
                            "Analyze content using advanced computer vision techniques",
                            "Full control over privacy settings"
                        ]}
                        icon={videoIcon}
                    />
                    <FeatureCard
                        title="Interactive Media Chat"
                        description={[
                            "Upload unlimited images",
                            "Analyze content using advanced computer vision techniques",
                            "Full control over privacy settings"
                        ]}
                        icon={chatIcon}
                    />
                </div>

            </div>

        </div>
    )
}


export default Features