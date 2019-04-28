const React = require('react');
const Time = require('./Time');

class TimeContainer extends React.Component {

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

module.exports = TimeContainer;