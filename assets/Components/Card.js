import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function Card(props) {
  return (
    <TouchableOpacity 
    onPress={() => props.onclickDevice(props.devID, props.nickname)}
    style={[styles.container1, props.style]}>
      
        <Text style={styles.temprature}>{props.temp}</Text>
      
      
        <Text style={styles.nickName}>{props.nickname}</Text>
        
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row"
  },
  rect: {
    flex: 0.26,
    backgroundColor: "rgba(218, 218, 218,1)",
    justifyContent: "center"
  },
  temprature: {
    color: "#121212",
    alignSelf: "center"
  },
  rect2: {
    flex: 0.74,
    backgroundColor: "rgba(233, 233, 233,1)"
  },
  nickName: {
    color: "#121212",
    marginTop: 28,
    marginLeft: 73
  }
});

export default Card;
