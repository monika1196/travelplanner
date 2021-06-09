import React from "react";
import Forcast from "./Forcast";
import Mumbai from "../assets/mumbai.jpg";
import Edmonton from "../assets/edmonton.png";
import Toronto from "../assets/toronto.jpeg";
import Kolkata from "../assets/kolkata.jpg";
import Madrid from "../assets/madrid.jpg";
import "../components/MainContent.css";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.forcasts = [];
    this.state = {
      allForcasts: [],
      modified: false,
      cityDescription: "",
      name: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderForcast = this.renderForcast.bind(this);
    this.bgImg = "../assets/background.jpg";
    this.optionValue = ["mumbai", "edmonton", "toronto", "kolkata", "madrid"];
  }

  // A function that extracts data from a raw forcast and returns
  // an object that contains the city name, the time and a 6-elements array
  // that contains a 6-days forecast details.
  // These details to be handed down to a <Forcast /> component.
  createForcast = (forcast) => {
    const city = forcast.city;
    const time_now = forcast.time_now;
    let forcastDays = [];

    for (let i = 0; i < forcast.consolidated_weather.length; i++) {
      const date_of_forcast = forcast.consolidated_weather[i].applicable_date;
      const max_temp = Math.round(forcast.consolidated_weather[i].max_temp);
      const min_temp = Math.round(forcast.consolidated_weather[i].min_temp);
      const now_temp =
        i === 0 ? Math.round(forcast.consolidated_weather[i].the_temp) : "";
      const weather_state_name =
        forcast.consolidated_weather[i].weather_state_name;
      const weather_state_abbr =
        forcast.consolidated_weather[i].weather_state_abbr;

      forcastDays.push({
        date_of_forcast,
        max_temp,
        min_temp,
        now_temp,
        weather_state_name,
        weather_state_abbr,
      });
    }

    return { city, time_now, forcastDays };
  };

  createForcastComponent = (data) => {
    return (
      <Forcast
        key={Math.floor(Math.random() * 100)}
        city={data.city}
        time={data.time_now}
        forcastDays={data.forcastDays}
      />
    );
  };

  renderForcast() {
    let components = [];
    for (let i = 0; i < this.state.allForcasts.length; i++) {
      let forcastProps = this.createForcast(this.state.allForcasts[i]);

      components.push(this.createForcastComponent(forcastProps));
    }

    return components;
  }

  handleClick(event) {
    const city = event.target.value;
    // console.log(city);

    const url = `http://localhost:5001/cities/${city}/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data", data);
        this.setState({
          ...this.state,
          cityDescription: data.description,
          name: data.name,
        });

        // show this description in your application
      })
      .catch((er) => console.log(er));
    fetch(`http://localhost:5001/forcasts/${city}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data from server: ", data);

        const date = new Date();
        const time_now = date.getHours() + ":" + date.getMinutes();
        this.forcasts.pop();
        this.forcasts.push({
          city: city,
          time_now,
          consolidated_weather: data.consolidated_weather,
        });

        //this.forcasts.shift();

        this.setState({ allForcasts: this.forcasts });
        // console.log("this.state: ", this.state.allForcasts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log("this.state.allForcasts: ", this.state.allForcasts);
    const allComponents = this.renderForcast();
    return (
      <div className="mainClass">
        <div>
          <select
            name="select"
            data-testid="select"
            className="button "
            onChange={this.handleClick}
          >
            <option value="Select">Select</option>
            {this.optionValue.map((item, index) => (
              <option data-testid="select-option" key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="desp">
          {this.state.name == "Toronto" && (
            <img src={Toronto} className="descImg" alt="" />
          )}
          {this.state.name == "Edmonton" && (
            <img src={Edmonton} className="descImg" alt="" />
          )}
          {this.state.name == "Mumbai" && (
            <img src={Mumbai} className="descImg" alt="" />
          )}
          {this.state.name == "Kolkata" && (
            <img src={Kolkata} className="descImg" alt="" />
          )}
          {this.state.name == "Madrid" && (
            <img src={Madrid} className="descImg" alt="" />
          )}

          {this.state.cityDescription && <p>{this.state.cityDescription}</p>}
        </div>
        <div className="all-forcasts">
          {(this.state.allForcasts === undefined ||
            this.state.allForcasts.length < 1) && <h3>No forcasts to show</h3>}
          {this.state.allForcasts &&
            this.state.allForcasts.length >= 1 &&
            allComponents.map((item) => {
              return item;
            })}
        </div>
      </div>
    );
  }
}

export default MainContent;
