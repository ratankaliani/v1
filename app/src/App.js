import React, {Component} from 'react';
import logo from './logo.svg';
import Particles from 'react-particles-js';
import './App.css';
import Button from 'react-bootstrap/Button'
import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import { SocialIcon } from 'react-social-icons';





function App() {
    return (
      <div className="App">
        <div className="intro">
          <div id="name"> 
            Ratan Kaliani
          </div>
          
        </div>
        <div className="navigation">
          <div className="button">
              <AwesomeButton type="primary"
              href="https://drive.google.com/file/d/17BqvYHprrhmrAFD0CZCLNvR51NQ20B4v/view?usp=sharing"
              target="_blank">
                Resume</AwesomeButton>{' '}
          </div>
          <div className="button">
          <AwesomeButton type="primary"
            >Primary</AwesomeButton>{' '}
          </div>
          <div className="button">
          <AwesomeButton type="primary"
            >Primary</AwesomeButton>{' '}
          </div>
          <div className="button">
          <AwesomeButton type="primary"
            >Primary</AwesomeButton>{' '}
          </div>
        </div>
        <div className="socialicons">
          <div className="icon">
            <SocialIcon
              url = "mailto:ratan@berkeley.edu"
              target = "_blank"
            />
          </div>
          <div className="icon">
            <SocialIcon
              url = "https://twitter.com/ratankaliani"
              target = "_blank"
            />
          </div>
          <div className="icon">
            <SocialIcon
              url = "https://instagram.com/ratankaliani"
              target = "_blank"
            />
          </div>
          <div className="icon">
            <SocialIcon
              url = "https://github.com/ratankaliani"
              target = "_blank"
            />
          </div>
          <div className="icon">
            <SocialIcon
              url = "https://linkedin.com/in/ratankaliani"
              target = "_blank"
            />
          </div>
          <div className="icon">
            <SocialIcon
              url = "https://medium.com/@ratankaliani"
              target = "_blank"
            />
          </div>
          
        </div>
        <div id="particle-canvas">
          
          <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 60,
                      "density": {
                          "enable": true,
                          "value_area": 1500
                      }
                  },
                  "line_linked": {
                      "enable": true,
                      "opacity": 0.5
                  },
                  "move": {
                      "direction": "right",
                      "speed": 0.2
                  },
                  "size": {
                      "value": 1
                  },
                  "opacity": {
                      "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.5
                      }
                  }
              },
              "interactivity": {
                  "events": {
                      "onclick": {
                          "enable": true,
                          "mode": "push"
                      }
                  },
                  "modes": {
                      "push": {
                          "particles_nb": 1
                      }
                  }
              },
              "retina_detect": true
            }}
          />
        </div>
      </div>
    );
  }

export default App;
