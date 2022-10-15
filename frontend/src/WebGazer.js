import React, { useEffect } from 'react'

const WebGazer = () => {


    useEffect(() => {
        const webgazer = window.webgazer;
        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }
            var xprediction = data.x; //these x coordinates are relative to the viewport
            var yprediction = data.y; //these y coordinates are relative to the viewport
            console.log(elapsedTime); //elapsed time is based on time since begin was called
        }).begin();
    }, [])

    return (
        <div>
        </div>
    )   
}

export default WebGazer;