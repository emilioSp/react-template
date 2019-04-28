const React = require('react');
const ReactDOM = require('react-dom');
const TimeContainer = require('./TimeContainer');

const App = () => {
  return <TimeContainer/>
};

ReactDOM.render(<App/>, document.getElementById("app"));