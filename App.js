import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      style={{ marginTop: 20 }}
      source={{ uri: "https://www.mycreditagency.it" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});