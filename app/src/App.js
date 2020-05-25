import React, {Component} from 'react';
import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';
import {AwesomeButton} from 'react-awesome-button';

function App() {
    return (
      <div className="App">
        <div id="intro">
          <div id="name"> 
            Ratan Kaliani
          </div>
          <div id = "">
            <AwesomeButton type="primary">
            Button
            </AwesomeButton>
          </div>
          <div id = "">
            <AwesomeButton type="primary">
            Button
            </AwesomeButton>
          </div>
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
