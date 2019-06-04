import React from 'react'
import {ListGroup, Button} from 'reactstrap'
import Item from './Item'
import {connect} from "react-redux";
import {addItemToStore, getItem, removeStoredItem} from "../Actions/ItemAction";

class ItemList extends React.Component {

    componentDidMount() {
        fetch('http://localhost:1337/').then((res) => {
            return res.json()
        }).then((data) => {
            this.props.dispatch(getItem(data))
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
            return response.json()
        }).then((json) => {
            this.props.dispatch(addItemToStore(json))
        }).catch()
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
                this.props.dispatch(removeStoredItem(itemId))
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
                    {this.props.storedItems.map((item) =>
                    <Item item={item} removeItem={this.removeItem.bind(this)} key={item._id}/>
                    )}
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ItemList)