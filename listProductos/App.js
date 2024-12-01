import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

const productos = [
  {
    nombre: "Doritos",
    categoria: "Snaks",
    precioCompra: "0.40",
    precioVenta: "0.45",
    id: 100,
  },
  {
    nombre: "Manicho",
    categoria: "Golisionas",
    precioCompra: "0.20",
    precioVenta: "0.25",
    id: 101,
  },
  {
    nombre: "Desinfectante",
    categoria: "Limpieza",
    precioCompra: "0.90",
    precioVenta: "1",
    id: 102,
  },
  {
    nombre: "Salsa de Tomate",
    categoria: "Salsas",
    precioCompra: "0.80",
    precioVenta: "0.90",
    id: 103,
  },
  {
    nombre: "Leche",
    categoria: "Lácteos",
    precioCompra: "0.95",
    precioVenta: "1.05",
    id: 104,
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos 📗</Text>
      <FlatList
        style={styles.list}
        data={productos}
        renderItem={(elemento) => {
          return (
            <View style={styles.itemProducto}>
              <Text style={styles.nombreProducto}>
                {elemento.item.nombre} ({elemento.item.categoria})
              </Text>
              <Text style={styles.precio}>USD {elemento.item.precioVenta}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => {
          return item.id;
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
    paddingTop: 50,
    alignItems: "stretch",
  },
  title: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  list: {
    margin: 20,
  },
  itemProducto: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 15,
    padding: 12,
    borderRadius: 10,
  },
  nombreProducto: {
    fontSize: 15,
  },
  precio: {
    fontWeight: "bold",
  },
});
