import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/headline/public/2015/07/19/music.jpg) center / cover'
                        }}> BPM Project
                    </CardTitle>
                        <CardText>
                            Music Hub allows users the ability to search from a list of their favorite artists. It keeps users up to date on the latest artist’s social media posts, upcoming shows, youtube music videos, preview their albums and allow the ability for users to open and play the song or album in their spotify/itunes app.
                    </CardText>
                        <CardActions border>
                            <Button a href="https://github.com/joseluissaboya/BPM-App" target="_blank" colored>Github</Button>
                            <Button a href="https://joseluissaboya.github.io/BPM-App/index.html" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                 
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://image.freepik.com/free-vector/cartoon-green-bag-money-cash-icon_24877-12962.jpg) center / cover'
                        }}> LP Project
                    </CardTitle>
                        <CardText>
                            LP, Local Payment, can be used as a third party for any transactions that occurs locally.
                        </CardText>
                        <CardActions border>
                            <Button a href="https://github.com/mzzarate/LP/tree/norsang" target="_blank" colored>Github</Button>
                            <Button a href="https://github.com/mzzarate/LP/tree/norsang" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
            )
        } else if (this.state.activeTab === 2) {
            return (
                 
                <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background:
                                'url(https://cdn.dribbble.com/users/1284944/screenshots/2881767/snakeio-icons.png) center / cover'
                        }}> Snake Game
                    </CardTitle>
                        <CardText>
                        The Snake is changing it's diet and looking for the purest apple in the forest to eat.
                    </CardText>
                        <CardActions border>
                            <Button a href="https://github.com/kimanikelly/Project-3" target="_blank" colored>Github</Button>
                            <Button a href="https://snake-game-project-3.herokuapp.com/" target="_blank" colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
            )
    }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>BPM</Tab>
                    <Tab>LP</Tab>
                    <Tab>Snake Game</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;
