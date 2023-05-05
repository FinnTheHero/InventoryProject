import React, { Component } from 'react'
import './items.css'

class Items extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('/inventories')
            .then(response => response.json())
            .then(items => {
                this.setState({items}, () => console.log('Items Fetched'))
            })
    }

    render() {
        return(
            <div>
                <ul>
                    {this.state.items.map((item) => {
                        return(
                            <li key={item.id}>{item.name} | {item.price}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Items