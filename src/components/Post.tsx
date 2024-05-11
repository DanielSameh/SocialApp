import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PostItem } from "../types";

interface PostProps {
  item: PostItem;
  onPress: () => void;
}

const Post: React.FC<PostProps> = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.userContainer}>
        <Image
          source={require("../../assets/avatar.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.userName}>{item.user.name}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Post;
