import { StyleSheet, View } from "react-native";
import { Youtube } from "../../components";
import { useEffect, useState } from "react";

interface PropsType {
  navigation: any;
  route: any;
}

const Player = ({ navigation, route }: PropsType) => {
  const { data, level } = route.params;
  const [source, setSource] = useState("");

  useEffect(() => {
    setSource(data.find((item: any) => item.id === level).sources);
  }, [data, level]);

  return (
    <View style={styles.container}>
      <Youtube navigation={navigation} sources={source} />
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
