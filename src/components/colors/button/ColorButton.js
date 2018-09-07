import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'
import classNames from 'classnames'

import { setSelectedColor, setFilteredColor, removeFilteredColor } from '../../../redux/actions/ColorActions'
import { COLORS, ROLES } from '../../../constants'

import './ColorButton.css'

class ColorButton extends Component {
  handleClick = () => {
    const {
      dispatchSelectedColor,
      dispatchAddFilteredColor,
      dispatchRemoveFilteredColor,
      color,
      role,
      colors
    } = this.props
    
    switch (role) {
      case ROLES.MARKING:
        dispatchSelectedColor(color)
        break
      case ROLES.FILTERING:
        if (colors.filteredColors.includes(color)){
          dispatchRemoveFilteredColor(color)
        } else {
          dispatchAddFilteredColor(color)
        }
        break
      default:
        break
    }
  }
  
  render() {
    const { color, role, colors: { filteredColors, selectedColor } } = this.props
    const selectedFiltered = ROLES.FILTERING === role && filteredColors.includes(color)
    const selectedMarked = ROLES.MARKING === role && selectedColor === color
    const classes = classNames({
      'selected': selectedFiltered || selectedMarked
    })
    
    return (
      <Button color={color} className={classes} onClick={this.handleClick}>
      {color.toUpperCase()}
      </Button>
      )
    }
  }
  
  ColorButton.propTypes = {
    color: PropTypes.oneOf([COLORS.RED, COLORS.YELLOW, COLORS.GREEN]).isRequired,
    role: PropTypes.oneOf([ROLES.FILTERING, ROLES.MARKING]).isRequired,
  }
  
  const mapStateToProps = state => ({
    colors: state.colors
  })
  const mapDispatchToProps = dispatch => ({
    dispatchSelectedColor: color => dispatch(setSelectedColor(color)),
    dispatchAddFilteredColor: color => dispatch(setFilteredColor(color)),
    dispatchRemoveFilteredColor: color => dispatch(removeFilteredColor(color))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)