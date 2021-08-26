import React from 'react'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import PublicIcon from '@material-ui/icons/Public';
import SpeedIcon from '@material-ui/icons/Speed';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

const Weather = (props) => {
    return (
        <div className="infoWeath">
        { props.city && 
            <div>
                <p><PublicIcon/> Manzil: {props.city}, {props.country}  </p>
                <p><WbCloudyIcon/> Harorat: {props.temp}  </p>
                <p><SpeedIcon/> Bosim: {props.pressure} </p>
                <p><WbSunnyIcon/> Quyosh botishi: {props.sunset} </p>
            </div>
        }<h1>{ props.error}</h1>
        </div>
    )
}
export default Weather;