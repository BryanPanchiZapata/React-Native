import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [nombre, onChangeNombre] = useState("");
  const [apellido, onChangeApellido] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Margin 🐱‍🐉</Text>
      <TextInput
        onChangeText={onChangeNombre}
        value={nombre}
        placeholder="Ingrese su nombre"
        style={styles.cajaInput}
      />
      <TextInput
        onChangeText={onChangeApellido}
        value={apellido}
        placeholder="Ingrese su apellido"
        style={styles.cajaInput}
      />
      <Button title="OK" />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column", //eje principal (vertical)
    justifyContent: "center", //vertical
    alignItems: "stretch", // horizontal
    paddingHorizontal: 20,
  },
  cajaInput: {
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 15,
    padding: 12,
  },
  titulo: {
    fontSize: 52,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
  },
});
