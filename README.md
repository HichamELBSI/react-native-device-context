# react-native-device-context

[![npm](https://img.shields.io/npm/v/react-native-device-context.svg)](https://www.npmjs.com/package/react-native-device-context) [![Downloads](https://img.shields.io/npm/dt/react-native-device-context.svg)](https://www.npmjs.com/package/react-native-device-context) [![Licence](https://img.shields.io/npm/l/react-native-device-context.svg)](https://www.npmjs.com/package/react-native-device-context)

> Some simple context providers for react-native device api

## Installation

```bash
$ npm install react-native-device-context --save
```

or use yarn

```bash
$ yarn add react-native-device-context
```

## Usage

How to use providers

```js
// Root app.js

import {
  NetInfoProvider,
  AppStateProvider,
  AccessibilityInfoProvider
} from "react-native-device-context";

const App = () => (
  <NetInfoProvider>
    <AppStateProvider>
      <AccessibilityInfoProvider>
        <App />
      </AccessibilityInfoProvider>
    </AppStateProvider>
  </NetInfoProvider>
);
```

## List of providers/consumers

```js
import {
  NetInfoContext,
  AppStateContext,
  AccessibilityInfoContext
} from "react-native-device-context";

// NetInfo exposes info about online/offline status
const NetInfo = () => (
  <NetInfoContext.Consumer>
    {({ connectionInfo }) => (
      <View>
        <Text>
          {/* connectionInfo type and effective type : https://facebook.github.io/react-native/docs/netinfo */}
          {connectionInfo.type === "none" ? "Not connected" : "Connected !"}
        </Text>
      </View>
    )}
  </NetInfoContext.Consumer>
);

// AppState tell you if the app is in the foreground or background
const AppState = () => (
  <AppStateContext.Consumer>
    {/* appState equal active, background or inactive */}
    {/* https://facebook.github.io/react-native/docs/appstate */}
    {({ appState }) => (
      <View>
        {appState === "active" && (
          <Text>Display this text only when the app is foregrounded</Text>
        )}
        {appState !== "active" && (
          <Text>The app is running in the background or is inactive</Text>
        )}
      </View>
    )}
  </AppStateContext.Consumer>
);

// AccessibilityInfo tell you if the device has a screen reader that is currently active or not
const AccessibilityInfo = () => (
  <AccessibilityInfoContext.Consumer>
    {({ screenReaderEnabled }) => (
      <View accessible={screenReaderEnabled}>
        {/* if screenReaderEnabled is true, the View will be an accessible element. */}
        <Text>Text 1</Text>
        <Text>Text 2</Text>
      </View>
    )}
  </AccessibilityInfoContext.Consumer>
);
```
