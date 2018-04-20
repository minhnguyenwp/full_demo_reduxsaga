import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Sy - Sub-Components

class Item extends React.Component {
    render() {
        const item = this.props.item;
        return (<li className="breadcrumb-item">
            {item.path ? (<Link to={item.path}>{item.name}</Link>) :
                (<a>{item.name}</a>)
            }
        </li>);
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;
