import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Dimensions, Button } from "react-native";

interface PropsType {
  videoSource: string;
  navigation: any;
}

const { width, height } = Dimensions.get("window");

export default function VideoPlayerScreen({
  videoSource,
  navigation,
}: PropsType) {
  const ref = useRef(null);
  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener("playingChange", (isPlaying) => {
      setIsPlaying(isPlaying);
      if (!isPlaying) {
        player.play();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [player, videoSource]);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <View style={styles.contentContainer}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        pointerEvents="none"
      />

      <View style={styles.buttonContainer}>
        <Button title="Pause"></Button>
        <Button title="Next"></Button>
        <Button title="Volume"></Button>
        {showButton && (
          <Button
            onPress={() => navigation.navigate("Score")}
            title="Skip"
          ></Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    position: "relative",
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  video: {
    width: width,
    height: height,
  },
  controlsContainer: {
    padding: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
