import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  ScrollView,
  Alert,
  Keyboard,
} from "react-native";

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
];

//determina si se esta creando una nueva persona o se esta modificando una existente
let esNuevo = true;
//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;

export default function App() {
  const [codigo, setCodigo] = useState();
  const [nombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [precioCompra, setprecioCompra] = useState();
  const [precioVenta, setprecioVenta] = useState();
  const [numElementos, onChangeElementos] = useState(productos.length);
  const codigoInputRef = useRef(null);

  let ItemsProductos = (props) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemIndice}>
          <Text style={styles.textoprincipal}>{props.indice}</Text>
        </View>
        <View style={styles.itemProducto}>
          <Text style={styles.nombreProducto}>{props.producto.nombre}</Text>
          <Text style={styles.nombreProducto}>
            ({props.producto.categoria})
          </Text>
        </View>
        <View style={styles.itemPrecio}>
          <Text style={styles.precio}>{props.producto.precioVenta}</Text>
        </View>

        <View style={styles.containerButton}>
          <Button
            title="E"
            onPress={() => {
              setCodigo(props.producto.id);
              setNombre(props.producto.nombre);
              setCategoria(props.producto.categoria);
              setprecioCompra(props.producto.precioCompra);
              setprecioVenta(props.producto.precioVenta);
              esNuevo = false;
              indiceSeleccionado = props.indice;
              codigoInputRef.current?.focus();
            }}
          />
          <Button
            title="X"
            onPress={() => {
              indiceSeleccionado = props.indice;
              productos.splice(indiceSeleccionado, 1);
              console.log("arreglo productos", productos);
              onChangeElementos(productos.length);
            }}
          />
        </View>
      </View>
    );
  };

  let existeProducto = () => {
    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === codigo) {
        return true;
      }
    }
    return false;
  };

  let guardarProducto = () => {
    if (!codigo || !nombre || !categoria || !precioCompra || !precioVenta) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }
    if (esNuevo) {
      if (existeProducto()) {
        Alert.alert(
          "Message",
          "El producto ya existe con el codigo: " + codigo
        );
      } else {
        let producto = {
          id: codigo,
          nombre: nombre,
          categoria: categoria,
          precioCompra: precioCompra,
          precioVenta: precioVenta,
        };
        productos.push(producto);
      }
    } else {
      console.log("modificar producto");
      productos[indiceSeleccionado].nombre = nombre;
      productos[indiceSeleccionado].categoria = categoria;
      productos[indiceSeleccionado].precioCompra = precioCompra;
      productos[indiceSeleccionado].precioVenta = precioVenta;
    }
    limpiar();
    onChangeElementos(productos.length);
  };

  let limpiar = () => {
    setCodigo(null);
    setNombre(null);
    setCategoria(null);
    setprecioCompra(null);
    setprecioVenta(null);
    esNuevo = true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text style={styles.title}>Productos 📗</Text>
        <ScrollView>
          <View>
            <TextInput
              style={styles.textInput}
              ref={codigoInputRef}
              value={codigo}
              onChangeText={setCodigo}
              placeholder="CÓDIGO"
              keyboardType="numeric"
              editable={esNuevo}
            />
            <TextInput
              style={styles.textInput}
              value={nombre}
              onChangeText={setNombre}
              placeholder="NOMBRE"
            />
            <TextInput
              style={styles.textInput}
              value={categoria}
              onChangeText={setCategoria}
              placeholder="CATEGORIA"
            />
            <TextInput
              style={styles.textInput}
              value={precioCompra}
              onChangeText={(valor) => {
                setprecioCompra(valor);

                const precioVentaCalculado = (parseFloat(valor) + 0.15).toFixed(
                  2
                );
                setprecioVenta(precioVentaCalculado);
              }}
              placeholder="PRECIO COMPRA"
              keyboardType="numeric"
            />

            <TextInput
              style={styles.textInput}
              value={precioVenta}
              onChangeText={setprecioVenta}
              placeholder="PRECIO VENTA"
              keyboardType="numeric"
              editable={false}
            />
            <View style={styles.componenteBotones}>
              <Button
                title="Guardar"
                onPress={() => {
                  guardarProducto();
                  Keyboard.dismiss();
                }}
              />
              <Button
                title="Nuevo"
                onPress={() => {
                  limpiar();
                  Keyboard.dismiss();
                }}
              />
              <Text> Productos: {numElementos}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.list}
          data={productos}
          renderItem={(elemento) => {
            return (
              <ItemsProductos
                indice={elemento.index}
                producto={elemento.item}
              />
            );
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
      <View style={styles.areaFinal}>
        <Text>Bryan Panchi Zapata</Text>
      </View>
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
    paddingTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    margin: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "gray",
    flex: 1,
    marginBottom: 15,
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
  },

  areaContenido: {
    flex: 9,
  },
  areaCabecera: {
    backgroundColor: "white",
    margin: 10,
  },

  nombreProducto: {
    fontSize: 15,
  },
  precio: {
    fontWeight: "bold",
  },

  itemIndice: {
    justifyContent: "center",
    marginRight: 5,
  },
  itemProducto: {
    flex: 4,
  },
  itemPrecio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  componenteBotones: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  areaFinal: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: 40,
    margin: 20,
  },
});
