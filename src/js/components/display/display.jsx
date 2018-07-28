import React from 'react';

export default class Display extends React.Component {
    render() {
        const { name, noResult, lat, long, temp, pressure, humidity, minTemp, maxTemp, windSpeed } = this.props;
        let display;
           if(noResult === false ) {
            display =
            <div className='container'>
                <div className='jumbotron'>
                <h1>City Information</h1>
                    <p> City {name} </p>
                    <p>Lat/Long: {lat}, {long}</p>
                </div>
                <div className="weather-display">
                    <div className="row">
                        <div className="weather-info">
                            Temperature{parseInt(temp)}(K)
                        </div>
                        <div className="weather-info">
                            Pressure {pressure}
                        </div>
                        <div className="weather-info">
                            Humidity {humidity}
                        </div>
                    </div>
                    <div className="row">
                        <div className="weather-info">
                            Lowest Temp{parseInt(minTemp)} (K)
                        </div>
                        <div className="weather-info">
                            Highest Temp{parseInt(maxTemp)}(K)
                        </div>
                        <div className="weather-info">
                            Wind Speed{parseInt(windSpeed)}
                        </div>
                    </div>
                </div>
            </div>
        } else {
            display =
                <div className='container'>
                    <h1>City Information</h1>
                    <div className='jumbotron'>
                        City
                    <p>Lat/Long </p>
                    </div>
                    <div className="weather-display">
                        <div className="row">
                            <div className="weather-info">
                                Temperature
                        </div>
                            <div className="weather-info">
                                Pressure
                        </div>
                            <div className="weather-info">
                                Humidity
                        </div>
                        </div>
                        <div className="row">
                            <div className="weather-info">
                                Lowest Temp
                        </div>
                            <div className="weather-info">
                                Highest Temp
                        </div>
                            <div className="weather-info">
                                Wind Speed
                        </div>
                        </div>
                    </div>
                </div>
        }
        return(display);
    }
}