import React, { Component, createContext } from "react";
import { AccessibilityInfo, Text } from "react-native";

const AccessibilityInfoContext = createContext({
  screenReaderEnabled: false
});

class AccessibilityInfoProvider extends Component {
  state = {
    screenReaderEnabled: false
  };

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      "change",
      this.handleScreenReaderToggled
    );
    AccessibilityInfo.fetch().then(isEnabled => {
      this.setState({
        screenReaderEnabled: isEnabled
      });
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      "change",
      this.handleScreenReaderToggled
    );
  }

  handleScreenReaderToggled = isEnabled => {
    this.setState({
      screenReaderEnabled: isEnabled
    });
  };

  render() {
    return (
      <AccessibilityInfoContext.Provider value={this.state}>
        {this.props.children}
      </AccessibilityInfoContext.Provider>
    );
  }
}

export { AccessibilityInfoProvider, AccessibilityInfoContext };
