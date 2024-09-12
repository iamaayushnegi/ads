import { Button, StyleSheet, Text, View } from "react-native";

interface PropsType {
  navigation: any;
}

const Youtube = ({ navigation }: PropsType) => {
  return (
    <View style={styles.container}>
      <Text>Youtube</Text>
      <View style={styles.buttonContainer}>
        <Button title="Pause"></Button>
        <Button title="Next"></Button>
        <Button title="Volume"></Button>
        <Button
          onPress={() => navigation.navigate("Score")}
          title="Skip"
        ></Button>
      </View>
    </View>
  );
};

export default Youtube;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
