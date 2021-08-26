import './App.css';
import React from 'react';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/WeatherInfo'

const API_KEY = "ac20daade692f1891e1d3f076e245e03";

class App extends React.Component {
    state = {
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      error: undefined
    }
  
   gettingWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      
      if(city){
        const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
        console.log(data)
      


      var Temp = data.main.temp;
      if(Temp > 1){ 
        var newTemp = "+" + data.main.temp;
      }else {
        var newTemp = data.main.temp;
      }
      
      
      
      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getUTCHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


      this.setState({
        temp: newTemp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      })
    }else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Shahar nomini kiriting!"
      })
    }
  
  };
    render() {
      return (

        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 info">
                  <Info />
                </div>
                <div className="col-sm-7 form">
                  <Form weatherMethod={this.gettingWeather}/>
                  <Weather 
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  
    );
  }
  };


 

export default App;
