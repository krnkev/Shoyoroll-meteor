import React from 'react';
import { Menu,  Grid, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});


    render() {
        const {activeItem} = this.state;
        return (
            <Grid
                centered
                style={{ backgroundColor:'#white', color: '#black', padding: '60px 20px 0px 0px'}}
                columns='equal'
            >
                <Grid.Column>
                    <List
                        position='left'
                    >
                        fact <br />
                    </List>
                </Grid.Column>
                <Grid.Column>
                    <List>
                        Terms of Use <br />
                    </List>
                </Grid.Column>


                <Grid.Column>

                    <Menu.Item
                        position='left'
                        name='instagram'
                    >
                        Privacy Policy
                    </Menu.Item>
                </Grid.Column>

                <Grid.Column>

                    <Menu.Item
                        name='twitter'
                    >
                        Contact   Link33    World CLan
                    </Menu.Item>
                </Grid.Column>
            </Grid>
        )
    }
}
