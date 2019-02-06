import React, { Component, createContext } from "react";
import { AppState, Text } from "react-native";

const AppStateContext = createContext({
  appState: ""
});

class AppStateProvider extends Component {
  state = {
    appState: AppState.currentState
  };

  componentDidMount() {
    AppState.addEventListener("change", this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  handleAppStateChange = nextAppState =>
    this.setState({ appState: nextAppState });

  render() {
    return (
      <AppStateContext.Provider value={this.state}>
        {this.props.children}
      </AppStateContext.Provider>
    );
  }
}

export { AppStateProvider, AppStateContext };
