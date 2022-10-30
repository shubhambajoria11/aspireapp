import { StyleSheet } from "react-native";
export const LocalDashboardStyles = StyleSheet.create({
  app: {
    backgroundColor: "#0C365A",
    flex: 1,
  },
  logo: {
    height: 80,
  },
  header: {
    color: "white",
    fontSize: 45,
    marginTop: 15,
    margin: 20,
  },
  textAvlBal: {
    color: "white",
    marginTop: 30,
    marginHorizontal: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textBalAmountSymbol: {
    width: 30,
    height: 20,
    backgroundColor: "green",
    alignItems: "center",
    marginLeft: 20,
  },
  subContainerBalAmount: {
    flexDirection: "row",
    alignItems: "center",
  },
  textBalAmount: {
    marginLeft: 15,
    color: "white",
    fontSize: 25,
  },
  subContainerWhite: {
    backgroundColor: "white",
    marginTop: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
