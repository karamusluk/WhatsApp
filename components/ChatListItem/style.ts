import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upperContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: Dimensions.get("window").width,
    width: Dimensions.get("window").width,
  },
  leftContainer: {},
  username: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  lastMessage: {
    fontSize: 14,
    color: "grey",
    maxWidth: "90%",
  },
  messageTime: {
    fontSize: 14,
    color: "grey",
    flex: 1,
    alignContent: "center",
  },
  usernameTimeContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
});
