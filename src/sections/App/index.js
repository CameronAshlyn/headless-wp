import React, { Component } from 'react';
import { matchPath } from 'react-router-dom'
import Navigation from '../../components/Navigation';




class App extends Component {

  state = {
    ready: false,
    previousPath: null,
    data: null

  }

  static defaultProps = {
    windowWidth: 970,
    windowHeight: 560,
  }

  matchPath = path => matchPath(window.location.pathname, path)

  setReady = data => this.setState({ data, ready: true })

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.setState({ previousPath: this.props.location.pathname })
    }
  }

  getKey = pathname => {
    return [pathname]
      .map(p => p.split("/"))
      .map(arr => arr[arr.length - 1] || "home");
  };

  renderRoute = () => {
    const key = this.getKey(this.props.location.pathname)[0];

    return this.props.routes
      .filter(({ path }) => this.matchPath(path))
      .map(({ Component, path }) => <Component key={key} {...this.props} />);
  };

  render() {
    const { windowHeight, windowWidth, pageX, pageY } = this.props;

    return (
      <div id="app" className="border-padding">
        <Navigation
          windowWidth={windowWidth}
          windowHeight={windowHeight}
          pageX={pageX}
          pageY={pageY}
        />
        {this.renderRoute()}
      </div>
    );
  }

  
  
}

export default App;
