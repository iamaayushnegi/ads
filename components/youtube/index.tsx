import { Button, StyleSheet, Text, View } from "react-native";
import VideoPlayerScreen from "../video-player";

interface PropsType {
  navigation: any;
  sources: string;
  description?: string;
}

const Youtube = ({ navigation, sources, description }: PropsType) => {
  if (!sources) {
    return null;
  }
  return (
    <View style={styles.container}>
      <VideoPlayerScreen videoSource={sources} navigation={navigation} />
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
});
