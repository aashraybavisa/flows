import { Text, View } from "react-native";
import React from "react";
import HomeScreen from "./src/screens/home";

export type Props = {};

const App: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
    </View>
  );
};

export default App;
