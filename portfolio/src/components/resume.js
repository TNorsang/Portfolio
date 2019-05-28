import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src= {window.location.origin + "/images/boy.png"}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Tenzin Norsang</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am 23 years old.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>88 Boiling Springs Ave, East Rutherford, NJ 07073</p>
            <h5>Phone</h5>
            <p>(201) 362-3182</p>
            <h5>Email</h5>
            <p>thenorsang@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2019}
              schoolName="Rutger's FullStack Boot Camp"
              schoolDescription="This is a 6 month course. I received a certification."
               />
               
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2014}
              endYear={2017}
              jobName="SanTech Global Corp"
              jobDescription= " - Established extensive procedures and policies for troubleshooting and resolving hardware"
              jobDescription1=" - Performed network adminstration duties, created network user accounts & permissions, reset passwords"
              jobDescription2=" - Provided superb customer service/support for computer and communications systems"
              jobDescription3=" - Lead team in installing on location hardware devices"
              jobDescription4=" - Designed many IOS/ANdroid based applications through Photoshop and implemented simplified UI/UX techniques"
              />
              <Experience
                startYear={2017}
                endYear={2019}
                jobName="Stock Market (Day Trader)"
                jobDescription="Monitored U.S. market data in order to predict/keep track of market indices."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
                <p> HTML | CSS | Javascript | React | Photoshop </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;