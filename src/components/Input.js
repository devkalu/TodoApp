import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={inputChange}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: "white", //important for shadow to be visible
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#f9f9f9",
  },
  input: {
    height: 60,

    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
});

export default Input;
