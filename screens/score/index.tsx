import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface PropsType {
  navigation: any;
  route: any;
}

const Score = ({ navigation, route }: PropsType) => {
  const { total, data } = route.params;

  const renderLevels = (item: any) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Player", { data: data })}
        >
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Score</Text>
      {Array.from({ length: total }, (_, index) => index + 1).map(renderLevels)}
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
