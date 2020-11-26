import React from 'react';
import { Time } from './Time';

export class TimeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000);
  }

  render() {
    return <Time currentTime={this.state.currentTime.toLocaleString()} />
  }
}