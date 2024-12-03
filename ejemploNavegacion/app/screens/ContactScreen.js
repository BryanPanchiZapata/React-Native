import { StyleSheet, Text, View, Button } from "react-native";

export const Contact = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <Button
        title="Ir a Home"
        onPress={() => {
          navigation.navigate("HomeNav");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
