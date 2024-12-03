import { StyleSheet, Text, View, Button } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir a contactos"
        onPress={() => {
          navigation.navigate("ContactNav");
        }}
      />
      <Text style={styles.text}>HOME</Text>
      <Button
        title="Ir a Productos"
        onPress={() => {
          navigation.navigate("ProductNav");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingBottom: 60,
  },
});
