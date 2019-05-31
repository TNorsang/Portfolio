// This import is setting up react
import React, { Component } from 'react';
// This import is getting the app css from app.css
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom'

class App extends Component {
    render() {
        return (
           
            <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Norsang's Portfolio"  scroll>
            <Navigation>
                <Link to="/"> Home </Link>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="Norsang's Portfolio">
            <Navigation>
                <Link to="/"> Home </Link>  
                <Link to="/resume">Resume</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/project">Projects</Link>
                <Link to="/contact">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
        )
    }
}
//     <div class="nav">
//     <div class="contactMe">
//         <a href="/"><img src="assets/images/Chat_Blue.png" alt="chat logo"> Contact Me </a>
//     </div>
//     <div class="navIcons">

        
//         <a href="/"><img src="assets/images/linkin logo.png" alt="linkedin logo" width="50px"> </a>

//     </div>
//     </div>


// <div class="landing">
//     <div class="ladingWrapper">
//         <div class="landingL">
//             <h1>Tenzin Norsang</h1>

//             <p>Hello, my name is Tenzin Norsang. I am a <br><span class="blue">Full

//                     Stack Developer</span> </p>

//             <ul>
//                 <li>
//                     <p><a href="https://tnorsang.github.io/bamazon/"> Bamazon Project </a> </p>
//                     <p><a href="https://tnorsang.github.io/Train-Scheduler/ "> Train Schedular </a> </p>
//                     <p><a href="https://tnorsang.github.io/Train-Scheduler/ "> Music Trivia </a> </p>
//                     <p><a href="https://tnorsang.github.io/giphy/"> Giphy </a> </p>
//                     <p><a href="https://tnorsang.github.io/Psychic-Game/"> Psychic-Game </a> </p>
//                 </li>
//             </ul>
//             <br>
//         </div>
//         <div class="LandingR">

//             <img src="assets/images/pic.jpg" alt="Tenzin Norsang" width="400px">

//         </div>
//         <img src="assets/images/Scroll.png" alt="scroll down" class="scroll">
//     </div>
// </div>

// <div class="skills">
//     <h2>Skills</h2>
//     <p>Novice Developer</p>

//     <div class="programs"> 
//         <img src="assets/images/html.png" alt="html icon" width="100px">
//         <img src="assets/images/CSS-Logo.png" alt="css icon" width="100px">
//         <img src="assets/images/js logo.png" alt="js icon" width="100px">
//         <img src="assets/images/pythonlogo.png" alt="python icon" width="100px">

// </div>
//   );
// }

export default App;
