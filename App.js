import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const screenStack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <screenStack.Navigator>
          <screenStack.Screen name="CategoryScreen" component={CategoryScreen}/>
          <screenStack.Screen name="MealScreen" component={MealScreen}/>
        </screenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
