// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import PostData from './components/PostData'

// class App extends Component {
//   render () {
//     return (
//       <div className="App">
//         <PostData />
//       </div>
//     )
//   }
// }

// export default App

// Importing modules
import React, { useState, useEffect } from "react";

import Commands from "./components/Commands"
import "./App.css";
  
function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        telemetryData: "",
        date: "",
    });
  
    // // Using useEffect for single rendering
    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
    //     fetch("/data").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //             setdata({
    //                 telemetryData: data.TelemetryData,
    //                 date: data.Date,
    //             });
    //         })
    //     );
    // }, [data]);

    const requestTelemetryData = () => {
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    telemetryData: data.TelemetryData,
                    date: data.Date,
                });
            })
        );
      }
  
    return (
        <div className="App">
            <header className="App-header">
                <h1>React App</h1>
                <button onClick={() => requestTelemetryData()}>Press me!</button>
                {/* Calling a data from setdata for showing */}
                <p>{data.telemetryData}</p>
                <p>{data.date}</p>

                <Commands />
            </header>
        </div>
    );
}
  
export default App;
