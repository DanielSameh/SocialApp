import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_POST_DETAILS } from "../graphql/queries";
import Comment from "../components/Comment";

const PostDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { id } = route.params;
  const { loading, error, data } = useQuery(GET_POST_DETAILS, {
    variables: { id },
  });

  if (loading)
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator />
      </View>
    );
  if (error)
    return (
      <View style={styles.indicatorContainer}>
        <Text>Error: {error.message}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.userContainer}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.userName}>{data.post.user.name}</Text>
        </View>
        <Text style={styles.title}>{data.post.title}</Text>
        <Text>{data.post.body}</Text>
      </View>
      <FlatList
        data={data.post.comments.nodes}
        renderItem={({ item }) => <Comment item={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FAF9F6",
  },
  post: {
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  list: {
    paddingBottom: 20,
  },
});

export default PostDetailsScreen;
