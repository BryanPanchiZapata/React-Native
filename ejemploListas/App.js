import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

let personas = [
  { nombre: "Marco", apellido: "Cajas", cedula: "176278909" },
  { nombre: "Camila", apellido: "Jurado", cedula: "011244109" },
  { nombre: "Pablo", apellido: "Parker", cedula: "091244109" },
];
export default function App() {
  return (
    <View style={styles.container}>
      <Text>PERSONAS 🌍</Text>
      <FlatList
        style={styles.lista}
        data={personas}
        renderItem={(elemento) => {
          return (
            <View style={styles.itemPersona}>
              <Text style={styles.textoprincipal}>
                {elemento.index}
                {elemento.item.nombre} {elemento.item.apellido}
              </Text>

              <Text style={styles.textosecundario}>{elemento.item.cedula}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.cedula;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#add8e6",
    flexDirection: "column", //eje principal
    paddingTop: 90,
    alignItems: "stretch",
  },
  lista: {
    //backgroundColor: "#90ee90",
    margin: 5,
  },
  itemPersona: {
    backgroundColor: "#ffa07a",
    marginBottom: 10,
    padding: 10,
  },
  textoprincipal: {
    fontSize: 20,
    paddingBottom: 5,
  },
  textosecundario: {
    fontStyle: "italic",
    fontSize: 15,
  },
});
