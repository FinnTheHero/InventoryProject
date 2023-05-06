import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

// Create Navbar Component
class Navbar extends Component { 
    // Render Data
    render() {
        return(
            <div>
                 <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="/">Invenotiries</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="/addsss">Add</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Navbar