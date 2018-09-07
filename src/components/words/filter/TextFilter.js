import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Label, Segment } from 'semantic-ui-react'

import '../words.css'

class TextFilter extends Component {
  showFilteredWords = () => {
    const { words, colors: { filteredColors } } = this.props
    
    return (
      <Label.Group> {
        filteredColors.map( color => words[color].sort().map( (word, i) => (
            <Label key={i} color={color}>{word}</Label> 
          )))
      }
      </Label.Group>
    )
  }
  
  render() {
    return (
      <Segment className="editor">
        <div>
          {this.showFilteredWords()}
        </div>
      </Segment>
    )
  }
}

const mapStateToProps = state => ({
  words: state.words,
  colors: state.colors
})

export default connect(mapStateToProps)(TextFilter)