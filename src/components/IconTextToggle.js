import { View, Text, Image, Switch } from "react-native";
import React, { useState } from "react";

const IconTextToggle = ({
  headingProp,
  subHeadingProp,
  imageFileNameProp,
  onPressProp,
  switchValProp,
}) => {
  // const [switchVal, setSwitchVal] = useState(false);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: "5%",
          marginTop: 25,
        }}
      >
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/topUp.png")}
        />
        <View style={{ paddingLeft: 20, width: "75%" }}>
          <Text>{headingProp}</Text>
          <Text style={{ fontSize: 10 }}>{subHeadingProp}</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
            marginHorizontal: 20,
          }}
        >
          <Switch
            rackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={switchValProp ? "#fff" : "#f4f3f4"}
            onValueChange={onPressProp}
            value={switchValProp}
            style={{ transform: [{ scaleX: 0.5 }, { scaleY: 0.5 }] }}
          />
        </View>
      </View>
    </View>
  );
};

export default IconTextToggle;
