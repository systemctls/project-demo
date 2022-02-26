import React, {Component} from 'react';

export default class extends Component {
  render() {
    const iframeStyle = {
      width: '100%',
      height: `${this.props.height || 420}px`,
      border: 'solid 1px #ccc',
      margin: '10px 0',
    };
    let source = `//doodle.webgl.group/demo/#/${this.props.demoId}`;
    // if(window.location.hostname === '127.0.0.1' || 'localhost') {
    //   source = `//localhost:3030/#/${this.props.demoId}`;
    // }
    return (
      <iframe src={source}
        scrolling="yes"
        id='demo'
        style={iframeStyle}
      ></iframe>
    );
  }
}
