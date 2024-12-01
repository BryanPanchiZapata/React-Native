import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Comp 1" />
      <Button title="Comp 2" color="red" />
      <Button title="Comp 3" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-end", // principal
    alignItems: "flex-start", //secundario
  },
});
