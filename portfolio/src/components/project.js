import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div><h1>This is Project 1</h1></div>
            )
        }
    }

  

    render() {
        return( 
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple> 
                    <Tab>Project 1</Tab>
                    <Tab>Project 2</Tab>
                    <Tab>Project 3</Tab>
                    <Tab>Project 4</Tab>
                </Tabs>
                
                <section>
                    {this.toggleCategories()}
                 </section>

            </div>
        )
    }
}

    export default Project;