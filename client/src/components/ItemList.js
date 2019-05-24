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

    removeItem(itemId) {
        fetch('http://localhost:1337/delete', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: itemId})
        }).then((response) => {
            return (response.json())
        }).then((json) => {
            if (json.success) {
                const items = [...this.state.listedItems]
                const index = items.findIndex(function (item) {
                    return item._id === itemId
                })
                items.splice(index, 1)
                this.setState({listedItems: items})
            }
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
                    <Item item={item} removeItem={this.removeItem.bind(this)} key={item.id}/>
                    )}
                </ListGroup>
            </div>
        )
    }
}

export default ItemList