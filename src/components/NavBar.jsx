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
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



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
                <NavbarBrand >
                    <img src={logo} className="app-logo" alt="logo" onClick={this.scrollToTop}/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto"  navbar>
                        <NavItem>
                            <NavLink>
                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}> Home</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink> 
                                <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
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
