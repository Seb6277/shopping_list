import React from 'react';
import {ListGroupItem} from 'reactstrap';

class Item extends React.Component {

    render() {
        return(
            <ListGroupItem>
                {this.props.item.name}
            </ListGroupItem>
        )
    }
}

export default Item