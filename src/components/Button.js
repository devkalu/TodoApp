import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Button = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#efefef"
      style={styles.button}
      onPress={submitTodo}
    >
      <FontAwesome name="plus" size={24} color="rgb(239, 71, 111)" />
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 3, height: 3 },
  },
  button: {
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#ffffff",
    width: 60,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  submit: {
    color: "#666666",
    fontWeight: "600",
  },
});

export default Button;
