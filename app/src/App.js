import React, {Component} from 'react';
import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';

function App() {
    return (
      <div className="particle-canvas">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 50
              },
              "size": {
                "value": 3
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
