import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View, } from "react-native";




function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >

        <View  style={styles.logoContainer}>
        <Image styles={styles.logo} source={require("../assets/logo-blue.png")} />
        <Text>Sell What You Dont Need</Text>
        </View>
        
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}






const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
    // marginTop: 100
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "orange",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },

});

export default WelcomeScreen;
