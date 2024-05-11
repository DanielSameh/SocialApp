import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CommentItem } from "../types";

const Comment: React.FC<{ item: CommentItem }> = ({ item }) => (
  <View style={styles.commentCard}>
    <View style={styles.commentUserContainer}>
      <Image
        source={require("../../assets/avatar.jpg")}
        style={styles.avatar}
      />
      <Text style={styles.commentName}>{item.name}</Text>
    </View>
    <Text>{item.body}</Text>
  </View>
);

const styles = StyleSheet.create({
  commentCard: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  commentUserContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentName: {
    fontWeight: "bold",
  },
});

export default Comment;
