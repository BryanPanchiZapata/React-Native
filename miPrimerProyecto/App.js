import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert } from "react-native";

export default function App() {
  const despedirse = () => {
    Alert.alert("Mensaje", "Despedida");
  };
  return (
    <View style={styles.container}>
      <Text>Holasaa!</Text>
      <StatusBar style="auto" />
      <Button
        title="Hola"
        //Función que no recibe parametros
        onPress={() => Alert.alert("Simple Button pressed", "I am a button")}
      />

      <Button title="Adios" onPress={despedirse} />
    </View>
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
