import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

export default function App() {
  //const [nombre, setNombre] = useState("Ingrese su nombre");
  const [nombre, onChangeNombre] = useState("Ingrese su nombre");
  const [apellido, onChangeApellido] = useState("Ingrese su apellido");
  const [nombreCompleto, setNombreCompleto] = useState("");
  return (
    <View style={styles.container}>
      <Text>🌍</Text>
      <Text>Hola {nombreCompleto}</Text>
      <TextInput
        style={styles.cajatexto}
        //onChangeText={(txt) => {
        //  setNombre(txt)
        //}}
        //value={nombre}
        onChangeText={onChangeNombre}
        value={nombre}
      />

      <TextInput
        style={styles.cajatexto}
        onChangeText={onChangeApellido}
        value={apellido}
      />
      <Button
        title="Saludar"
        onPress={() => {
          let completo = nombre + " " + apellido;
          setNombreCompleto(completo);
        }}
      />
      <StatusBar style="auto" />
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
  cajatexto: {
    margin: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
