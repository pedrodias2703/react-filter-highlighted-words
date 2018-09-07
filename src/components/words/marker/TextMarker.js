import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

import { addWord, removeWord } from '../../../redux/actions/WordsActions'

import '../words.css'

const LOREM = `And if you feel that you can't go on 
  And your will's sinkin' low 
  Just believe and you can't go wrong 
  In the light you will find the road (You will find the road)
  Hey, oh, did you ever believe that I could leave you 
  Standing out in the cold 
  Hey, babe, I know how it feels 'cause I have slipped through 
  To the very depths of my soul, yeah 
  Oh, baby, I just want to show you what I'd give you 
  It is from every bend in the road 
  Now listen to me 
  Oh, whoa-whoa, as I was and really would be for you, too, honey 
  As you would for me, oh, I would share your load 
  Let me share your load, ooh, let me share, share your load
  And if you feel that you can't go on 
  In the light you will find the road
  Hey, oh, though the winds of change may blow around you 
  But that will always be so 
  Wow-wow, wow-wow, when love is pain it can devour you 
  If you are never alone 
  I would share your load, I would share your load 
  Baby, let me, oh, let me
  In the light 
  Everybody needs the light 
  In the light, in the light, in the light
  Light, light, light, in the light 
  Light, light, light, in the light, oh, yeah 
  Light, light, light, in the light`

class TextMarker extends Component {
  
  handleSelection = () => {
    const { colors: { selectedColor }, addWord } = this.props
    const sel = window.getSelection()
    if (selectedColor && !sel.isCollapsed) {
      addWord(selectedColor, sel.toString())
      const range = sel.getRangeAt(0)
      sel.removeAllRanges()
      document.designMode = "on"
      sel.addRange(range)
      document.execCommand("HiliteColor", false, selectedColor)
      sel.removeAllRanges()
      document.designMode = "off"
    }
  }
  
  handleClick = (event) => {
    const { removeWord } = this.props
    const node = event.target
    if (node.tagName.toLowerCase() === 'span' && node.attributes.getNamedItem('style')){
      const word = node.innerText
      const attributes = node.attributes.getNamedItem('style').value.split(':')
      if (attributes[0] === 'background-color') {
        const color = attributes[1].slice(0, attributes[1].length-1).trim()
        node.replaceWith(word)
        removeWord(color, word)
      }
    }
  }
  
  render() {
    const { children =  LOREM } = this.props
    
    return (
      <Segment className="editor">
        <div contentEditable 
        suppressContentEditableWarning 
        onMouseUp={this.handleSelection}
        onClick={this.handleClick}
        >
          {children}
        </div>
      </Segment>
      )
    }
  }
  
  const mapStateToProps = state => ({
    colors: state.colors
  })
  
  const mapDispatchToProps = dispatch => ({
    addWord: (color, word) => dispatch(addWord(color, word)),
    removeWord: (color, word) => dispatch(removeWord(color, word))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(TextMarker)