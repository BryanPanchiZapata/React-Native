import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [valorConvertir, onChangedMoneda] = useState("Ingres el valor en dolares");
  const [resultado, onChangedResult] = useState(0);
  return (
    <View style={styles.container}>
      <Text>💲</Text>
      <Text>Resultado: {resultado}</Text>
      <TextInput
        style={styles.cajaContenedor}
        onChangeText={onChangedMoneda}
        value={valorConvertir}
      />
      <StatusBar style="auto" />

      <Button
        title="Pesos Mexicanos "
        onPress={() => {
          let resultado = parseFloat(valorConvertir) * 20.38;
          onChangedResult(resultado.toFixed(2));
        }}
      />

      <Button
        title="Pesos Colombianos"
        onPress={() => {
          let resultado = parseFloat(valorConvertir) * 4374.73;
          onChangedResult(resultado.toFixed(2));
        }}
      />

      <Button
        title="Euros"
        onPress={() => {
          let resultado = parseFloat(valorConvertir) * 0.95;
          onChangedResult(resultado.toFixed(2));
        }}
      />
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
  cajaContenedor: {
    margin: 12,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
