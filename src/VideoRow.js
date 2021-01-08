import React from 'react';
import './VideoRow.css'

function  VideoRow(props) {

    const {views, subs, description,timestamp,channel,title,image} = props

    return(
        <div className="videoRow">
            <img src={image} alt=""/>
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} . <span className="videoRow__subsNumber">{subs}</span> Subscribers {views} . views . {timestamp}
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoRow