import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Keyboard,
  Alert,
} from "react-native";

let personas = [
  { nombre: "Marco", apellido: "Cajas", cedula: "176278909" },
  { nombre: "Camila", apellido: "Jurado", cedula: "011244109" },
  { nombre: "Pablo", apellido: "Parker", cedula: "091244109" },
];
//determina si se esta creando una nueva persona o se esta modificando una existente
let esNuevo = true;
//esta variable almacena el indice del arreglo del elemento seleccionado para edicion
let indiceSeleccionado = -1;

export default function App() {
  const [txtCedula, onChangeCedula] = useState();
  const [txtNombre, onChangeNombre] = useState();
  const [txtApellido, onChangeApellido] = useState();
  const [numElementos, onChangeElementos] = useState(personas.length);

  let ItemPersona = ({indice, persona}) => {
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}>
          <Text style={styles.textoprincipal}>{indice}</Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoprincipal}>
            {persona.nombre} {persona.apellido}
          </Text>
          <Text style={styles.textosecundario}>{persona.cedula}</Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title="E"
            color="green"
            onPress={() => {
              onChangeCedula(persona.cedula);
              onChangeNombre(persona.nombre);
              onChangeApellido(persona.apellido);
              esNuevo = false;
              indiceSeleccionado = indice;
            }}
          />
          <Button
            title="D"
            color="red"
            onPress={() => {
              indiceSeleccionado = indice;
              personas.splice(indiceSeleccionado, 1);
              console.log("arreglo personas", personas);
              onChangeElementos(personas.length);
            }}
          />
        </View>
      </View>
    );
  };

  let existePersona = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].cedula === txtCedula) {
        return true;
      }
    }
    return false;
  };

  let guardarPersona = () => {
    if (esNuevo) {
      if (existePersona()) {
        Alert.alert(
          "Message",
          "La persona ya existe con la cedula: " + txtCedula
        );
      } else {
        let persona = {
          nombre: txtNombre,
          apellido: txtApellido,
          cedula: txtCedula,
        };
        personas.push(persona);
      }
    } else {
      console.log("modificar personas");
      personas[indiceSeleccionado].nombre = txtNombre;
      personas[indiceSeleccionado].apellido = txtApellido;
    }
    limpiar();
    onChangeElementos(personas.length);
  };

  let limpiar = () => {
    onChangeCedula(null);
    onChangeNombre(null);
    onChangeApellido(null);
    esNuevo = true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput
          style={styles.txtInput}
          value={txtCedula}
          onChangeText={onChangeCedula}
          placeholder="Ingrese su cedula"
          keyboardType="numeric"
          editable={esNuevo}
        />
        <TextInput
          style={styles.txtInput}
          value={txtNombre}
          onChangeText={onChangeNombre}
          placeholder="Ingrese su nombre"
        />
        <TextInput
          style={styles.txtInput}
          value={txtApellido}
          onChangeText={onChangeApellido}
          placeholder="Ingrese su apellido"
        />
        <View style={styles.componenteBotones}>
          <Button
            title="Guardar"
            onPress={() => {
              guardarPersona();
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
        </View>
        <Text> Elementos: {numElementos}</Text>
      </View>
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          renderItem={({ index, item }) => {
            return <ItemPersona indice={index} persona={item} />;
          }}
          keyExtractor={(item) => item.cedula}
        />
      </View>
      <View style={styles.areaFinal}>
        <Text>Pie de pagina</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column", //eje principal
    //paddingTop: 90,
    alignItems: "stretch",
  },
  areaCabecera: {
    flex: 2,
    backgroundColor: "white",
    paddingTop: 50,
    margin: 10,
  },
  areaContenido: {
    flex: 4,
    //  backgroundColor: "gold",
  },
  areaFinal: {
    flex: 1,
    // backgroundColor: "brown",
    alignItems: "center",
  },
  lista: {
    //backgroundColor: "#90ee90",
    margin: 5,
  },
  itemPersona: {
    backgroundColor: "#fff",
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
  },
  textoprincipal: {
    fontSize: 20,
    paddingBottom: 5,
  },
  textosecundario: {
    fontStyle: "italic",
    fontSize: 15,
  },
  itemIndice: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContenido: {
    flex: 6,
    paddingLeft: 5,
  },
  itemBotones: {
    flex: 2,
    //backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 9,
    marginBottom: 10,
  },
  componenteBotones: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
