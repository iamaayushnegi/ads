import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Player from "./screens/player";
import Score from "./screens/score";
import { useEffect } from "react";
import { commonApi } from "./common";

const Stack = createStackNavigator();
export default function App() {
  const fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        const resp = await commonApi({ endpoint: "message", method: "GET" });
        if (resp.status) {
          console.info("resp", resp);
        }
      } else {
        await AsyncStorage.setItem("@storage_Key", "1");
      }
    } catch (e) {
      console.info("err: getting key", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
