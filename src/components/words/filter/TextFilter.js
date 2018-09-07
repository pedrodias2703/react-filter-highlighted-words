import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Label } from 'semantic-ui-react'


class TextFilter extends Component {
  showFilteredWords = () => {
    const { words, colors: { filteredColors } } = this.props;
    
    return (
      <Label.Group> {
        filteredColors.map( color => {
          return words[color].sort().map( (word, i) => (
            <Label key={i} color={color}>{word}</Label> 
          ))
        })
      }
      </Label.Group>
    )
  }
  
  
  render() {
    return (
      <div>
      {this.showFilteredWords()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  words: state.words,
  colors: state.colors
})

export default connect(mapStateToProps)(TextFilter);