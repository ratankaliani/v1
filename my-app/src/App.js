import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div id="detail-content">
				<div class="container">
          <div class="row">
            <div class="col-md-12">
              <img src="ratan.jpg" width="200" height="200"/>
              <h1>About Me</h1>

              <p>Hi, I’m Prathik — I’m a junior studying CS at Stanford and I love building cool things. This past summer I worked at <a target="_blank" href="https://nv-adlr.github.io">NVIDIA</a> developing methods for parsing fine-grained details from images and before that I was at <a target="_blank" href="https://www.amazon.jobs/en/teams/machine-learning">Amazon CoreAI </a> building a new package to automatically fill in missing values in large datasets (<a target="_blank" href="https://github.com/awslabs/datawig">open-sourced on Github</a>).</p>
              <p>I’m super excited about 3D computer vision (check out a blog post I wrote <a target="_blank" href="https://thegradient.pub/beyond-the-pixel-plane-sensing-and-learning-in-3d/">here</a>), and previously worked on research designing models for reconstructing geometric and visual details in sparse point clouds (poster <a target="_blank" href="http://bit.ly/pconv3p">here</a>). This research won the Best Project Award from NVIDIA in <a target="_blank" href="http://cs231n.github.io">CS231N</a> (Stanford’s deep learning class).</p>
              <p>I also have an interest in computational genomics and I think there are some huge opportunities to transform patient care with software. In the past I worked on <a target="_blank" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&cad=rja&uact=8&ved=2ahUKEwiOg-X1-97lAhUPsZ4KHbzPAtkQFjADegQIBhAB&url=https%3A%2F%2Fnews.stanford.edu%2F2017%2F12%2F07%2Fstanford-freshman-invited-present-research-nobel-prize-awards-ceremony%2F&usg=AOvVaw2IOjEq6ypRnmd397w0eUD-">DNALoopR</a>, a tool to identify therapeutically relevant DNA interactions in cancer (won a $70,000 award at the Regeneron Science Talent Search and presented at the Nobel Prize Ceremony).</p>
              <p>On the side, I’ve worked on <a target="_blank" href="http://dvp.st/2wdPGgB">Autocross</a> (a kit to make any remote controlled car self-driving), <a target="_blank" href="http://bit.ly/structurekit"> StructureKit</a> (crowdsourced indoor mapping using a phone’s IMU), and an <a target="_blank" href="http://bit.ly/makearlit">app</a> to create more realistic lighting in Apple’s ARKit. </p>
              <p>Currently working on something new! Feel free to click on the links to learn more about past work or get in touch - my email is <a href="mailto:prathikn@stanford.edu">prathikn@stanford.edu</a></p>
            </div>
          </div>
				</div>
      </div>
    </div>
  );
}

export default App;
