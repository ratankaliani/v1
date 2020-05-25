import React, {Component} from 'react';
import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';

function App() {
    return (
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
                "value": 1
              },
              "size": {
                "value": 4
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
    );
  }

export default App;
