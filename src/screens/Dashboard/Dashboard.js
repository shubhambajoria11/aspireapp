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
import { LocalDashboardStyles } from "./constants";
import WhiteSubView from "../../components/WhiteSubView";
import CreditCard from "../../components/CreditCard";

const Dashboard = () => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={LocalDashboardStyles.app}>
      <ScrollView>
        <View>
          <Text style={LocalDashboardStyles.header}>{DEBIT_CARD}</Text>
          <Text style={LocalDashboardStyles.textAvlBal}>
            {AVAILABLE_BALANCE}
          </Text>
          <View style={LocalDashboardStyles.subContainerBalAmount}>
            <View style={LocalDashboardStyles.textBalAmountSymbol}>
              <Text>{AVL_BAL_SYMBOL}</Text>
            </View>
            <Text style={LocalDashboardStyles.textBalAmount}>{DIGIT_5000}</Text>
          </View>
        </View>
        <View
          style={[LocalDashboardStyles.subContainerWhite, { height: height }]}
        >
          <CreditCard />
          <WhiteSubView />
        </View>
      </ScrollView>
    </View>
  );
};

// const Dashboard = () => {
//   const [headerShown, setHeaderShown] = useState(false);
//   const translation = useRef(new Animated.Value(-100)).current;
//   return (
//     <View style={styles.app}>
//       <View>
//         <>
//           <View style={{ margin: 20 }}>
//             <Text style={styles.header}>Debit Card</Text>
//             <Text style={{ color: "white", marginTop: 30 }}>
//               Available Balance
//             </Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 marginTop: 20,
//                 alignItems: "center",
//               }}
//             >
//               <View
//                 style={{
//                   width: 30,
//                   height: 20,
//                   backgroundColor: "green",
//                   alignItems: "center",
//                 }}
//               >
//                 <Text>S$</Text>
//               </View>
//               <Text style={{ marginLeft: 15, color: "white", fontSize: 25 }}>
//                 5000
//               </Text>
//             </View>
//           </View>
//           <ScrollView>
//             <View
//               style={{
//                 marginTop: 200,
//                 backgroundColor: "white",
//                 borderTopStartRadius: 10,
//                 flex: 1,
//               }}
//             >
//               <View
//                 style={{
//                   backgroundColor: "green",
//                   width: "80%",
//                   height: "50%",
//                   alignSelf: "center",
//                   marginTop: -40,
//                 }}
//               >
//                 <Text>Card inside details</Text>
//               </View>

//             </View>
//           </ScrollView>
//         </>
//       </View>
//     </View>
//   );
// };

export default Dashboard;
