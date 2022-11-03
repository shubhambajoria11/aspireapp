import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import { Provider } from "react-redux";
import { StoreHub } from "./src/redux/store/Storehub";
export default function App() {
  return (
    <Provider store={StoreHub}>
      <MainTabNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#0C365A",
    flex: 1,
  },
  logo: {
    height: 80,
  },
  header: {
    color: "white",
    fontSize: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});
