import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [valor1, onChangeValor1] = useState("Ingrese el primer valor");
  const [valor2, onChangeValor2] = useState("Ingrese el segundo valor");
  const [resultado, onChangeResultado] = useState(0);

  return (
    <View style={styles.container}>
      <Text>✔</Text>
      <Text>Resultado: {resultado}</Text>
      <TextInput
        style={styles.cajatexto}
        onChangeText={onChangeValor1}
        value={valor1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.cajatexto}
        onChangeText={onChangeValor2}
        value={valor2}
        keyboardType="numeric"
      />
      <Button
        title="SUMA"
        onPress={() => {
          let resultado = parseInt(valor1) + parseInt(valor2);
          onChangeResultado(resultado);
        }}
      />
      <Button
        title="RESTA"
        onPress={() => {
          let resultado = parseInt(valor1) - parseInt(valor2);
          onChangeResultado(resultado);
        }}
      />

      <Button
        title="MULTIPLICACIÓN"
        onPress={() => {
          let resultado = parseFloat(valor1) * parseFloat(valor2);
          onChangeResultado(resultado);
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
