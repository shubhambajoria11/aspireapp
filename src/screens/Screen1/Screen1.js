import { View, Text, Button, FlatList } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementAction,
  decrementAction,
} from "../../redux/action/counterAction";
import { loadArticle } from "../../redux/action/loadArticle";

const Screen1 = () => {
  const myCounter = useSelector((store) => {
    return store.counterVar.counter;
  });

  const myIsLoading = useSelector((store) => {
    return store.articleRoot.isLoading;
  });

  const myFetchedData = useSelector((store) => {
    return store.articleRoot.fetchedData;
  });

  let dispatch = useDispatch();

  return (
    <View>
      <Button
        title="increment"
        onPress={() => {
          dispatch(incrementAction());
        }}
      />
      <Text>{myCounter}</Text>
      <Button
        title="decrement"
        onPress={() => {
          dispatch(decrementAction());
        }}
      />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "black",
          marginTop: 20,
        }}
      />
      <Button
        title="Load Articles"
        onPress={() => {
          dispatch(loadArticle());
        }}
      />
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "black",
          marginTop: 20,
          marginBottom: 20,
        }}
      />

      <FlatList
        data={myFetchedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Screen1;
