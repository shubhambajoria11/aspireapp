import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const CreditCard = () => {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <View style={{ marginTop: -80 }}>
      <TouchableOpacity
        style={{
          alignSelf: "flex-end",
          marginRight: "5%",
          flexDirection: "row",
          backgroundColor: "white",
          height: 25,
          width: 130,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        onPress={() => setShowDetails(!showDetails)}
      >
        <Image
          source={
            showDetails
              ? require("../assets/hide.png")
              : require("../assets/openEye.png")
          }
          style={{ width: 15, height: 15 }}
        />
        <Text style={{ fontSize: 12, paddingRight: 5, paddingLeft: 5 }}>
          {showDetails ? "Hide Card Details" : "Show Card Details"}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          backgroundColor: "#38D167",
          alignSelf: "center",
          width: "90%",
          height: 230,
          borderRadius: 20,
        }}
      >
        <Image
          style={{ alignSelf: "flex-end", margin: 30 }}
          source={require("../assets/aspireLogo.png")}
        />
        <Text
          style={{
            marginLeft: 30,
            color: "white",
            fontWeight: "900",
            fontSize: 18,
          }}
        >
          Mark Henry
        </Text>
        <Text
          style={{
            marginLeft: 30,
            color: "white",
            fontWeight: "600",
            marginTop: 20,
          }}
        >
          {showDetails ? "4028 2584 5488 4545" : "**** **** **** ****"}
        </Text>

        <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 5 }}>
          <Text style={{ color: "white" }}>
            {showDetails ? "Thru: 12/20" : "Thru: **/**"}
          </Text>
          <Text style={{ color: "white", paddingLeft: 30 }}>
            {showDetails ? "CVV:456" : "CVV:***"}
          </Text>
        </View>
        <Image
          style={{ alignSelf: "flex-end", margin: 30 }}
          source={require("../assets/visa.png")}
        />
      </View>
    </View>
  );
};

export default CreditCard;
