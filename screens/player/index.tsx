import { StyleSheet, View } from "react-native";
import { Youtube } from "../../components";

interface PropsType {
  navigation: any;
}

const Player = ({ navigation }: PropsType) => {
  return (
    <View style={styles.container}>
      <Youtube navigation={navigation} />
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
