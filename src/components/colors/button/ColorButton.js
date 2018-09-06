import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'semantic-ui-react'

import { setSelectedColor, setFilteredColor, removeFilteredColor } from '../../../redux/actions/ColorActions';
import { COLORS, ROLES } from '../../../constants';

class ColorButton extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            isMarked: false
        }
    }

    handleClick = () => {
        const {
            dispatchSelectedColor,
            dispatchAddFilteredColor,
            dispatchRemoveFilteredColor,
            color,
            role,
            colors
        } = this.props;

        switch (role) {
            case ROLES.MARKING:
                dispatchSelectedColor(color);
                break;
            case ROLES.FILTERING:
                if (colors.filteredColors.includes(color)){
                    dispatchRemoveFilteredColor(color);
                    this.setState({
                        isMarked: false
                    })
                } else {
                    dispatchAddFilteredColor(color);
                    this.setState({
                        isMarked: true
                    })
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { color, colors, role } = this.props;
        const { isMarked } = this.state;

        const classes = classNames({
            'color-block': true,
            'markedFiltering': isMarked,
            'markedMarking': colors.selectedColor === color && role === ROLES.MARKING
        })
        return (
            <Button basic className={`${classes} ${color}`} onClick={this.handleClick}>
                {color.toUpperCase()}
            </Button>
        );
    }
}

ColorButton.propTypes = {
    color: PropTypes.oneOf([COLORS.RED, COLORS.YELLOW, COLORS.GREEN]).isRequired,
    role: PropTypes.oneOf([ROLES.FILTERING, ROLES.MARKING]).isRequired,
};

const mapStateToProps = state => ({
    colors: state.colors
})
const mapDispatchToProps = dispatch => ({
    dispatchSelectedColor: color => dispatch(setSelectedColor(color)),
    dispatchAddFilteredColor: color => dispatch(setFilteredColor(color)),
    dispatchRemoveFilteredColor: color => dispatch(removeFilteredColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton);