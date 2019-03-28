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
import { Link, animateScroll as scroll} from 'react-scroll'



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

      scrollToTop = () => {
        scroll.scrollToTop();
      };


    render(){
    return (
        <div>
            <Navbar className="my-navbar" id="NavBar"  fixed="top" dark expand="md">
                <NavbarBrand onClick={this.scrollToTop}>
                    <img src={logo} className="app-logo" alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto"  navbar>
                        <NavItem>
                            <NavLink 
                                tag={Link}    
                                to="home" 
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                duration={500}>
                                Home
                            </NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="about" 
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                duration={500}>
                                About
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="experience" 
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                duration={500}>
                                Experience
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="projects" 
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                duration={500}>
                                Projects
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                tag={Link}
                                to="contact" 
                                activeClass="active"
                                spy={true} 
                                smooth={true} 
                                duration={500}>
                                Contact
                            </NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    )}
}


export default NavBar;
