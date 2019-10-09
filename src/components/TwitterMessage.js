import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      characters: 0
    };
  }

  handleTextChange = e => this.setState({ 
    text: e.target.value,
    characters: e.target.value.length
  });
  


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.text} type="text" onChange={this.handleTextChange} name="message" id="message" />
        {this.props.maxChars - this.state.characters}
      </div>
        
    );
  }
}

export default TwitterMessage;
