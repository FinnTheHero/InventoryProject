import React,{ Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            location: '',
            price: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()

        const { name,location,price } = this.state
        const item = {
            name,
            location,
            price
        }

        axios.post('/add', item)
            .then(() => console.log(item))
            .catch(err => console.log(err))
    }

    // Render Add Form 
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <label style={{
                        margin: 20
                    }}>
                        Name :
                            
                        <input type="text"  name="name" onChange={this.handleChange}/>
                    </label>
                    <label style={{
                        margin: 20
                    }}>
                        Name :
                            
                        <input type="text"  name="location" onChange={this.handleChange}/>
                    </label>
                    <label style={{
                        margin: 20
                    }}>
                        Name :
                            
                        <input type="text"  name="price" onChange={this.handleChange}/>
                    </label>
                    {/* <label style={{
                        margin: 20
                    }}>    
                        <Dropdown className="d-inline mx-2" autoClose="outside">
                            <Dropdown.Toggle id="dropdown-autoclose-outside">
                            Location
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item value='caeva' name="location" onChange={this.handleChange}>Menu Item</Dropdown.Item>
                            <Dropdown.Item value='caeva' name="location" onChange={this.handleChange}>Menu Item</Dropdown.Item>
                            <Dropdown.Item value='caeva' name="location" onChange={this.handleChange}>Menu Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </label>
                    <label style={{
                        margin: 20
                    }}>
                        price :     
                        <input type="text" value={this.state.value} name="price" onChange={this.handleChange} />
                    </label> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Add