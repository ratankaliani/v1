import React, {Component} from 'react';
import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';

function App() {
    return (
      <div className="App">
        <div id="name"> 
            Ratan Kaliani
        </div>
        <div id="particle-canvas">
          
          <Particles
            params={{
              "particles": {
                "color": {
                  "value": "#ffffff"
                },
                "number": {
                  "value": 100
                },
                "opacity": {
                  "value": 0.4
                },
                "size": {
                  "value": 2
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  }
                }
              }
            }}
          />
        </div>
      </div>
    );
  }

export default App;
