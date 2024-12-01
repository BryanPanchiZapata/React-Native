import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";

export default function App() {
  const [estatura, onChangeEs] = useState();
  const [peso, onChangePs] = useState();
  const [resultado, onChangeResult] = useState("");
  const [mensaje, onChangeMessage] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>CALCULADORA IMC 🍩 </Text>
      <Text>Estatura </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeEs}
        value={estatura}
        placeholder="Ingrese su estatura en centimetros"
        keyboardType="numeric"
      />
      <Text>Peso</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangePs}
        value={peso}
        placeholder="Ingrese su peso en kilogramos"
        keyboardType="numeric"
      />
      <Button
        title="Calcular"
        onPress={() => {
          let estaturaM = estatura / 100;
          let estaturaC = parseFloat(estaturaM) * parseFloat(estaturaM);
          let calculo = parseFloat(peso) / estaturaC;
          onChangeResult(calculo.toFixed(2));
          Keyboard.dismiss(); // ocultar el teclado al presionar el boton

          if (calculo < 18.5) {
            onChangeMessage("Su peso es inferior al normal");
          } else if (calculo >= 18.5 && calculo < 24.9) {
            onChangeMessage("Su peso es normal");
          } else if (calculo >= 25.0 && calculo < 29.9) {
            onChangeMessage("Su peso es superior al normal");
          } else if (calculo >= 30.0) {
            onChangeMessage("Obesidad");
          }
        }}
      />
      <Text style={styles.resultado}>Su índice de masa corporal es:</Text>
      <Text style={styles.mensajeFinal}>{resultado}</Text>
      <Text style={styles.mensaje}>Composición corporal:</Text>
      <Text style={styles.mensajeFinal}>{mensaje}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 15,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    color: "#5D629C"
  },
  resultado: {
    textAlign: "center",
    fontSize: 25,
    color: "gray",
    marginTop: 10,
    lineHeight: 40,
  },
  mensaje: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 20,
    color: "gray",
  },
  mensajeFinal: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
    color: "#3B629C",
  },
});
