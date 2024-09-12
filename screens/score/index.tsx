import { StyleSheet, Text, View } from "react-native";

const Score = () => {
  return (
    <View style={styles.container}>
      <Text>Score</Text>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
