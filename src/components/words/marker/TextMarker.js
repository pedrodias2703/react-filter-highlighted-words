import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react'


import { addWord } from '../../../redux/actions/WordsActions';

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
  
  render() {
    const { children =  LOREM } = this.props;
    const style = {
        overflow: 'auto',
        maxHeight: '200px'
    }
    return (
        <Segment>
            <div contentEditable 
                suppressContentEditableWarning 
                onMouseUp={this.handleSelection}
                style={style}
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
  addWord: (color, word) => dispatch(addWord(color, word))
})
export default connect(mapStateToProps, mapDispatchToProps)(TextMarker);