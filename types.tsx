/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Chats: undefined;
  Camera: undefined;
  Status: undefined;
  Calls: undefined;
};

export type ChatsScreenParamList = {
  ChatsScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: String;
};

export type Message = {
  id: String;
  content: String;
  createdAt: Date;
  // from: User;
  // to: User;
  // isRead: Boolean;
};

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
  lastMessageUser: User;
};
