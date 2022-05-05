import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealScreen from "./screens/MealScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const screenStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <screenStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerBackTitle: "Back",
            headerTintColor: 'white',
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <screenStack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
          />
          <screenStack.Screen name="MealScreen" component={MealScreen} />
        </screenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
