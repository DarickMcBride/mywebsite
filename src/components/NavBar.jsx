import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../logo.svg'



class NavBar extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
    return (
        <div>
            <Navbar className="my-navbar" id="NavBar"  fixed="top" dark expand="md">
                <NavbarBrand href="#Home">
                    <img src={logo} className="App-logo" alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto"  navbar>
                        <NavItem>
                            <NavLink>
                                <a href="#Home"> Home</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink> 
                                <a href="#About">About</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#experience">Experience</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    )}
}


export default NavBar;
