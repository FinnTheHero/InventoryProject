import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem'

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
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
    }}>
                <ul>
                    {this.state.items.map((item) => {
                        return(
                                <ListGroup variant='flush' key={item.id} style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    flexWrap: 'nowrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <ListGroup.Item>{item.name}</ListGroup.Item>
                                    <ListGroup.Item>{item.location}</ListGroup.Item>
                                    <ListGroup.Item>{item.price}GEL</ListGroup.Item>
                                    <ListGroupItem> <Button variant='outline-danger'>Delete</Button></ListGroupItem>
                                </ListGroup>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Items