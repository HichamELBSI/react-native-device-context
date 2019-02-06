// store/UserProvider.js
import React, { createContext, Component } from "react";
import { NetInfo } from "react-native";

const NetInfoContext = createContext({
  connectionInfo: {}
});

class NetInfoProvider extends Component {
  state = {
    connectionInfo: null
  };

  componentDidMount() {
    NetInfo.addEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleFirstConnectivityChange
    );
  }

  handleFirstConnectivityChange = connectionInfo => {
    this.setState({ connectionInfo });
  };

  render() {
    return (
      <NetInfoContext.Provider value={this.state}>
        {this.props.children}
      </NetInfoContext.Provider>
    );
  }
}

export { NetInfoProvider, NetInfoContext };
