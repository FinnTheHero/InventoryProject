import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

// Create Item Component
class Items extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }

    // Fetch The Data
    componentDidMount() {
        fetch('/inventories')
            .then(response => response.json())
            .then(items => {
                this.setState({items}, () => console.log('Items Fetched'))
            })
    }

    // Render Data
    render() {
        return(
            <div style={{
                height: '100vh'
            }}>
                    
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item) => {
                             return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.location}</td>
                                    <td>{item.price}</td>
                                    <td><Button variant='outline-danger'>Delete</Button></td>
                                </tr>
                             )})}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Items