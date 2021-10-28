import React from 'react';
import TimerApp from './TimerApp';
import ClockApp from './ClockApp';
import StopWatchApp from './StopWatchApp';
import NytApp from '../nyt-app/NytApp';


const TimePiecesApp = () => {
    
    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp />
                 <hr />
                <StopWatchApp /> 
                 <hr />
                <NytApp /> 
            </div>
        </div>
    )
}

export default TimePiecesApp;