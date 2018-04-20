import React from 'react';
import PropTypes from 'prop-types';

// Sy - Sub-Components
import Item from './Item';

class Breadcrumb extends React.Component { // eslint-disable-line react/prefer-stateless-function
    renderMenu(menu) {
        if (menu.length > 0) {
            return menu.map((item, index) => (<Item key={index} item={item}/>));
        }
        return [];
    }

    render() {
        const menu = this.renderMenu(this.props.menu);
        return (<div className="breadcrumb-body">
            <ul className="breadcrumb">
                {menu}
            </ul>
        </div>);
    }
}

Breadcrumb.propTypes = {
    menu: PropTypes.array.isRequired
};

export default Breadcrumb;
