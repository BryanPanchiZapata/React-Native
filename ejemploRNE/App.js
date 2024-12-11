import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Button, Icon, Input } from "@rneui/base";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState();
  return (
    <View style={styles.container}>
      <Text>🌍💲</Text>
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Ingrese su nombre"
        label="Nombre"
      />
      <Text>{name}</Text>
      <Button
        onPress={() => {
          Alert.alert("Message", "Su nombre es: " + name);
        }}
        title="OK"
        icon={{
          name: "cart",
          type: "evilicon",
          size: 15,
          color: "white",
        }}
      />

      <Button
        title="OK"
        icon={<Icon name="plancast" type="zocial" size="15" color="white" />}
      />
      <Icon name="plancast" type="zocial" size="15" color="black" />
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
