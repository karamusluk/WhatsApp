import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";
import { ChatRoom } from "../../types";
import moment from "moment";
type ChatListItemProps = {
  chatRoom: ChatRoom;
};
const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;

  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: chatRoom.lastMessageUser.imageUri }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.usernameTimeContainer}>
        <View style={styles.upperContainer}>
          <Text style={styles.username}>{chatRoom.users[1].name}</Text>
          <Text style={styles.messageTime}>
            {moment(chatRoom.lastMessage.createdAt).fromNow()}
          </Text>
        </View>
        <View style={styles.lastMessage}>
          <Text
            style={styles.lastMessage}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {chatRoom.lastMessageUser.name}: {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>

      {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
    </View>
  );
};

export default ChatListItem;
