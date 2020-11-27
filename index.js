import React from "react";
import { AppRegistry, StyleSheet, View } from "react-360";
import App from "./src/App";

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});

AppRegistry.registerComponent("Hello360", () => Hello360);
