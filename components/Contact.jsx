import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Contact({ name, number, deleteHandler }) {
  const [optionsVisible, setOptionsVisible] = useState(false);
  const pressHandler = (name) => {
    console.log(name);
    toggleOptions();
  };
  const toggleOptions = () => {
    setOptionsVisible((prev) => !prev);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => pressHandler(name)}
    >
      <Text style={styles.fontStyle}>
        {name}: {number}
      </Text>
      {optionsVisible && (
        <View>
          <TouchableOpacity onPress={() => {
            deleteHandler(name);
            toggleOptions();
          }} style={styles.deleteBtn}>
            <Text style={styles.deleteTxt}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginVertical: 10,
  },
  fontStyle: {
    fontSize: 20,
  },
  deleteBtn: {
    backgroundColor: "red",
    
    borderRadius: 50,
    padding: 20,
    marginVertical: 15,
  },
  deleteTxt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
