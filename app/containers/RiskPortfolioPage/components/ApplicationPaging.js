import React from 'react';
import PropTypes from 'prop-types';
// Sy - Sub-Components

class ApplicationPaging extends React.Component {

    goPrevPage() {
        this.props.goPage(this.props.currentPage - 1);
    }

    goNextPage() {
        this.props.goPage(this.props.currentPage + 1);
    }

    renderButton(totalPage) {
        if (totalPage > 0) {
            const buttons = [];
            for (let i = 1; i <= totalPage; i++) {
                buttons.push(
                    <li className="paging-item" key={i}>
                        <div className={"paging-btn" + (
                            this.props.currentPage === i
                            ? ' active'
                            : '')} onClick={() => this.props.goPage(i)}>{i}</div>
                    </li>
                );
            }
            return buttons;
        }
        return '';
    }

    render() {
        const buttonUI = this.renderButton(this.props.totalPage);
        return (<div className="application-paging">
            {this.props.currentPage > 1 ?
                <span className="prev-btn" onClick={this.goPrevPage.bind(this)}>Previous</span>
                : ''
            }
            <ul className="paging">
                {buttonUI}
            </ul>
            {this.props.currentPage < this.props.totalPage ?
                <span className="next-btn" onClick={this.goNextPage.bind(this)}>Next</span>
                : ''
            }
        </div>);
    }
}

ApplicationPaging.propTypes = {
    totalPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
    goPage: PropTypes.func.isRequired
};

export default ApplicationPaging;
