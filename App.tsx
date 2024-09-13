import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Player from "./screens/player";
import Score from "./screens/score";
import { useEffect, useState } from "react";
import { commonApi } from "./common";

const Stack = createStackNavigator();
export default function App() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(10);

  const getKey = async () => {
    try {
      const value = await AsyncStorage.getItem("@storage_Key");
      if (value !== null) {
        fetchData(value);
      } else {
        await AsyncStorage.setItem("@storage_Key", "1");
        fetchData("1");
      }
    } catch (e) {
      console.info("err: getting key", e);
    }
  };

  const fetchData = async (level: string) => {
    try {
      let page = Math.ceil(Number(level) / 10);
      const resp = await commonApi({
        endpoint: `level?page=${page}&limit=10`,
        method: "GET",
      });
      if (resp.status) {
        setData(resp.data);
        setTotal(resp.totalItems);
      }
    } catch (e) {
      console.info("err: getting key", e);
    }
  };

  useEffect(() => {
    getKey();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Player"
          component={Player}
          initialParams={{ data: data }}
        />
        <Stack.Screen
          name="Score"
          component={Score}
          initialParams={{ total: total, data: data }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
