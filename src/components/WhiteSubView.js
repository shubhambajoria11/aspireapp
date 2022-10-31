import { View, Text } from "react-native";
import React, { useState } from "react";
import IconTextToggle from "./IconTextToggle";
import { useNavigation } from "@react-navigation/native";

const WhiteSubView = () => {
  const [switchVal, setSwitchVal] = useState(false);
  const navigation = useNavigation();
  return (
    <View>
      <IconTextToggle
        headingProp="Top-up Account"
        subHeadingProp="Deposit money to your account to use with card"
        imageFileNameProp="topUp.png"
      />
      <IconTextToggle
        headingProp="Weekly Spending Limit"
        subHeadingProp="You haven't set any spending limit on card"
        imageFileNameProp="topUp.png"
        onPressProp={() => {
          setSwitchVal((preVal) => !preVal);
          if (!switchVal) {
            //TODO: Navigation
            navigation.navigate("Spending Limit");
          }
        }}
        switchValProp={switchVal}
      />
      <IconTextToggle
        headingProp="Freeze Card"
        subHeadingProp="Your debit card is currently active"
        imageFileNameProp="topUp.png"
      />
      <IconTextToggle
        headingProp="Get a new Card"
        subHeadingProp="This deactivates your current debit card"
        imageFileNameProp="topUp.png"
      />
    </View>
  );
};

export default WhiteSubView;
