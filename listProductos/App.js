import "react-native-gesture-handler";
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
  TouchableOpacity,
  Modal,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const codigoInputRef = useRef(null);

  let ItemsProductos = ({ indice, producto }) => {
    const editarItem = () => {
      setCodigo(producto.id);
      setNombre(producto.nombre);
      setCategoria(producto.categoria);
      setprecioCompra(producto.precioCompra);
      setprecioVenta(producto.precioVenta);
      esNuevo = false;
      indiceSeleccionado = indice;
    };

    const DrawerNav = () => {
      return (
        <Drawer.Navigator>
          <Drawer.Screen
            name="DrawerProductos"
            component={ListaProductos}
            options={{
              title: "Productos",
            }}
          />

          <Drawer.Screen
            name="DrawerEjemploTabs"
            component={ListaProductos}
            options={{
              title: "Ejemplo tabs",
            }}
          />

          <Drawer.Screen
            name="DrawerFinSesion"
            component={ListaProductos}
            options={{
              title: "Finalizar sesion",
            }}
          />
        </Drawer.Navigator>
      );
    };

    const confirmarEliminacion = () => {
      productos.splice(indice, 1); // Elimina el producto
      onChangeElementos(productos.length); // Actualiza el estado del número de elementos
      setModalVisible(false); // Cierra el modal
    };
    return (
      <TouchableOpacity onPress={editarItem}>
        <View style={styles.itemContainer}>
          <View style={styles.itemIndice}>
            <Text style={styles.textoprincipal}>{indice}</Text>
          </View>
          <View style={styles.itemProducto}>
            <Text style={styles.nombreProducto}>{producto.nombre}</Text>
            <Text style={styles.nombreProducto}>({producto.categoria})</Text>
          </View>
          <View style={styles.itemPrecio}>
            <Text style={styles.precio}>{producto.precioVenta}</Text>
          </View>

          <View style={styles.containerButton}>
            <Button
              title="D"
              onPress={() => {
                setProductoSeleccionado(producto);
                setModalVisible(true);
              }}
            />
          </View>
        </View>

        {modalVisible && productoSeleccionado?.id === producto.id && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalText}>
                  ¿Estás seguro de que deseas eliminar "{producto.nombre}"?
                </Text>
                <View style={styles.modalButtons}>
                  <Button
                    title="Cancelar"
                    onPress={() => setModalVisible(false)}
                  />
                  <Button title="Confirmar" onPress={confirmarEliminacion} />
                </View>
              </View>
            </View>
          </Modal>
        )}
      </TouchableOpacity>
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
          renderItem={({ index, item }) => {
            return <ItemsProductos indice={index} producto={item} />;
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
