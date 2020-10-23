import React from 'react';
import { Menu, Icon, Image, Container } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <Menu borderless className="topmenu">
                <Container>
                    <Menu.Item>
                        <Image size="small"
                               src="https://cdn.shopify.com/s/files/1/0100/7232/files/LOGO_2_RGB_1000x1000.jpg?v=1585599608"/>
                    </Menu.Item>
                    <Menu.Item
                        position='right'
                        name='search'
                        active={activeItem === 'search'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='search' />
                    </Menu.Item>

                    <Menu.Item>SHOP</Menu.Item>
                    <Menu.Item>ACCOUNT</Menu.Item>
                    <Menu.Item>CART (0)</Menu.Item>
                    <Menu.Item>FEED</Menu.Item>
                </Container>
            </Menu>
        )
    }
}