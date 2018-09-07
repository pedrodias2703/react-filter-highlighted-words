import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'

import { addWord, removeWord } from '../../../redux/actions/WordsActions';

import './TextMarker.css';

const LOREM = 'Laborum minim excepteur do irure eu ea occaecat ipsum eiusmod consequat consequat id Lorem. Aliqua fugiat sit deserunt ea elit mollit eu in do ut ad nostrud cupidatat. Culpa deserunt excepteur duis ut non aliqua cupidatat ipsum eu.'

class TextMarker extends Component {

  handleSelection = () => {
    const { colors: { selectedColor }, addWord } = this.props;
    const sel = window.getSelection();
    if (selectedColor && !sel.isCollapsed) {
      addWord(selectedColor, sel.toString());
      let range = sel.getRangeAt(0);
      sel.removeAllRanges();
      document.designMode = "on";
      sel.addRange(range);
      document.execCommand("HiliteColor", false, selectedColor);
      sel.removeAllRanges();
      document.designMode = "off";
    }
  }

  handleClick = (event) => {
    const { removeWord } = this.props;
    const node = event.target;
    if (node.tagName.toLowerCase() === 'span' && node.attributes.getNamedItem('style')){
      const word = node.innerText;
      const attributes = node.attributes.getNamedItem('style').value.split(':')
      if (attributes[0] === 'background-color') {
        const color = attributes[1].slice(0, attributes[1].length-1).trim();
        node.replaceWith(word);
        removeWord(color, word);
      }
    }
  }
  
  render() {
    const { children =  LOREM } = this.props;

    return (
        <Segment>
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
export default connect(mapStateToProps, mapDispatchToProps)(TextMarker);