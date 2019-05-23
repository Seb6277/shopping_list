import React from 'react'
import {ListGroup, Button} from 'reactstrap'
import Item from './Item'

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listedItems: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:1337/').then((res) => {
            return res.json()
        }).then((data) => {
            data.map((itemData) => {
                this.setState({listedItems: [...this.state.listedItems, itemData]})
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    addItem() {
        const newItem = prompt("")
        fetch('http://localhost:1337/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: newItem})
        }).then((response) => {
            return (response.json())
        }).then((json) => {
            this.setState({listedItems: [...this.state.listedItems, json]})
        })
    }

    render() {
        return(
            <div className="app_wrapper">
                <Button color="dark"
                        size="lg"
                        onClick={() => this.addItem()}
                >ADD</Button>
                <ListGroup className="list_group">
                    {this.state.listedItems.map((item) =>
                    <Item item={item} key={item.id}/>
                    )}
                </ListGroup>
            </div>
        )
    }
}

export default ItemList