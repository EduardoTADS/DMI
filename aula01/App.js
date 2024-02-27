import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo</Text>
      <TextInput defaultValue="Digite aqui" />

      <Image
        source={require("./assets/icaro.png")}
        style={{ width: 150, height: 200 }}
      />
      <Image
        source={require("./assets/teste.gif")}
        style={{ width: 350, height: 300 }}
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
    justifyContent: "center",
  },
});
