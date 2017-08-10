import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';

import './MemeItem';
import MemeItem from './MemeItem';


class App extends Component {

  constructor() {
    super();

    this.state = {
      memeLimit: 10
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to Meme Monster</h2>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
            return (
              <MemeItem key={index} meme={meme} />
            )
          })
        }
        <div className="meme-button" onClick={() => {
          this.setState({ memeLimit: this.state.memeLimit+10})
        }}>Load 10 More Memes</div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);