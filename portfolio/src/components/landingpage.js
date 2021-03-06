import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>

                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src= {window.location.origin + "/images/boy.png"}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">

                            <h1> Full Stack Web Developer </h1>

                            <hr/>

                            <p> HTML/CSS | JavaScript | React | React Native | NodeJS | Express | MongoDB </p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/tenzin-norsang-077577173/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                            
                            {/* Github */}
                            <a href="https://github.com/TNorsang" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github"  aria-hidden="true" />
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/norsangnyandak/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-instagram"  aria-hidden="true" />
                            </a>

                            
                        </div>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;