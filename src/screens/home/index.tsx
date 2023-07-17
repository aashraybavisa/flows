import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
