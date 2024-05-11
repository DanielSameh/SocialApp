import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import SplashScreen from "../screens/SplashScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Social App",
              headerStyle: {
                backgroundColor: "#8AB4F8",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="PostDetails"
            component={PostDetailsScreen}
            options={{
              title: "Post Details",
              headerStyle: {
                backgroundColor: "#A7D8DE",
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
