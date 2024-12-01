import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { useState } from "react";

export default function App() {
  /* const arreglo = useState(0);
  const contadorEstado = arreglo[0]; //priemra posicion == variable de estado
  //metodo que me permite modificar la variable de estado y repintar la pantalla
  const setContadorEstado = arreglo[1]; //segunda posicion == modifica la variable de estado y pinta la pantalla
 */

  /*   const incrementar = () => {
    setContadorEstado(contadorEstado + 1);
    console.log("contador estado: " + contadorEstado);
  };

  const decrementar =()=>{
    setContadorEstado(contadorEstado -1);
  }
 */

  const [vidas, setContadorEstado] = useState(5);
  const perididaVida = () => {
    setContadorEstado(vidas - 1);
    if (vidas - 1 === 0) {
      Alert.alert("Warning", "Game Over");
    }
  };

  const agregarVida = () => {
    setContadorEstado(vidas + 3);
    console.log(vidas);
  };

  return (
    <View style={styles.container}>
      <Text>😊</Text>
      <Text>Vidas: {vidas}</Text>

      <Button
        title="Perdida de vida"
        onPress={perididaVida}
        disabled={vidas === 0}
      />
      <Button title="Premiar" onPress={agregarVida} />
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
});
