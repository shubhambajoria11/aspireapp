import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Animated,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React, { useRef, useState } from "react";
import GlobalStyles, {
  AVAILABLE_BALANCE,
  AVL_BAL_SYMBOL,
  DEBIT_CARD,
  DIGIT_5000,
  SPENDING_LIMIT,
} from "../../constants/GlobalConstants";
import { LocalScreenStyles } from "../constants";
import WhiteSubView from "../../components/WhiteSubView";
import CreditCard from "../../components/CreditCard";
import IconText from "../../components/IconText";
import { TextInput } from "react-native-gesture-handler";
import ButtonAmount from "../../components/ButtonAmount";

const SpendingLimit = () => {
  const { width, height } = useWindowDimensions();
  const [amount, setAmount] = useState(0);
  return (
    <View style={LocalScreenStyles.app}>
      <ScrollView>
        <View>
          <Text style={LocalScreenStyles.header}>{SPENDING_LIMIT}</Text>
        </View>
        <View
          style={[
            LocalScreenStyles.subContainerWhiteSpending,
            { height: height },
          ]}
        >
          <IconText
            headingProp="Set a weekly debit card spending limit"
            subHeadingProp=""
            imageFileNameProp="indicator.png"
          />
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderColor: "#DCDCDC",
              marginHorizontal: 20,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#38D167",
                width: 30,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{AVL_BAL_SYMBOL}</Text>
            </View>
            <TextInput
              style={{ marginHorizontal: 5, fontSize: 18 }}
              placeholder="Enter the amount"
              keyboardType="number-pad"
              onChangeText={(eachChr) => setAmount(eachChr)}
              value={amount}
            />
          </View>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 11,
              color: "#DCDCDC",
              fontWeight: "bold",
              paddingTop: 10,
            }}
          >
            Here weekly means the last 7 days - not the calender week
          </Text>
          <View style={{ flexDirection: "row" }}>
            <ButtonAmount amountProp="S$ 5,000" />
            <ButtonAmount amountProp="S$ 10,000" />
            <ButtonAmount amountProp="S$ 20,000" />
          </View>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#38D167",
                height: 50,
                width: "80%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 40,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SpendingLimit;
