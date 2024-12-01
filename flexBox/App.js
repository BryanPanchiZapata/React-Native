import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.constainer2}></View>
      <View style={styles.constainer3}>
        <View style={styles.constainer4}></View>
        <View style={styles.constainer5}>
          <View style={styles.constainer6}></View>
          <View style={styles.constainer7}>
            <Button title="Boton" />
            <Button title="Boton" />
            <Button title="Boton" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    flexDirection: "column",
  },
  constainer2: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "column",
  },
  constainer3: {
    flex: 2,
    backgroundColor: "gray",
    flexDirection: "column",
  },
  constainer4: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "column",
  },
  constainer5: {
    flex: 1,
    backgroundColor: "purple",
    flexDirection: "row",
  },
  constainer6: {
    flex: 1,
    backgroundColor: "gold",
    flexDirection: "column",
  },
  constainer7: {
    flex: 2,
    backgroundColor: "brown",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
});
