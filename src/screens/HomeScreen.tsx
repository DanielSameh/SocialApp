import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries";
import Post from "../components/Post";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  if (error)
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );

  return (
    <FlatList
      data={data.posts.nodes}
      renderItem={({ item }) => (
        <Post
          item={item}
          onPress={() => navigation.navigate("PostDetails", { id: item.id })}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 10,
    backgroundColor: "#FAF9F6",
  },
});

export default HomeScreen;
