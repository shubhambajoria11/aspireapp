import { View, Text } from "react-native";
import React from "react";

const ButtonAmount = ({ amountProp }) => {
  return (
    <View
      style={{
        backgroundColor: "#EFFCF4",
        width: 90,
        height: 40,
        marginHorizontal: 20,
        marginVertical: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 10, color: "#38D167", fontWeight: "bold" }}>
        {amountProp}
      </Text>
    </View>
  );
};

export default ButtonAmount;
