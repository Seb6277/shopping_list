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
            body:{
                "name": newItem
            }
        }).then(function (response) {
            console.log(response)
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