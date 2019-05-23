import React from 'react';
import {ListGroupItem, Button} from 'reactstrap';

class Item extends React.Component {

    render() {
        return(
            <ListGroupItem>
                <Button
                    className="delete_button"
                    color="danger"
                    onClick={() => this.props.removeItem(this.props.item._id)}
                >X</Button>
                {this.props.item.name}
            </ListGroupItem>
        )
    }
}

export default Item