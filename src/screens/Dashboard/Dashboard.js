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
} from "../../constants/GlobalConstants";
import { LocalScreenStyles } from "../constants";
import WhiteSubView from "../../components/WhiteSubView";
import CreditCard from "../../components/CreditCard";

const Dashboard = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={LocalScreenStyles.app}>
      <ScrollView>
        <View>
          <Text style={LocalScreenStyles.header}>{DEBIT_CARD}</Text>
          <Text style={LocalScreenStyles.textAvlBal}>{AVAILABLE_BALANCE}</Text>
          <View style={LocalScreenStyles.subContainerBalAmount}>
            <View style={LocalScreenStyles.textBalAmountSymbol}>
              <Text>{AVL_BAL_SYMBOL}</Text>
            </View>
            <Text style={LocalScreenStyles.textBalAmount}>{DIGIT_5000}</Text>
          </View>
        </View>
        <View style={[LocalScreenStyles.subContainerWhite, { height: height }]}>
          <CreditCard />
          <WhiteSubView />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
