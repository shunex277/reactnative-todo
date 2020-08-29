import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { screenWidth } from '../styles';

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({title = 'TITLE'}) => {
  return (
    <View style={styels.container}>
      <View style={styels.titleContainer}>
        <Text style={styels.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styels = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 88,
    width: screenWidth,

    // shdowをつける https://reactnative.dev/docs/shadow-props
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  titleContainer: {

    // 文字を上下左右中央に持ってくる https://qiita.com/super-mana-chan/items/0d35a0b9ac1bf97593c8#%E4%B8%8A%E4%B8%8B%E5%B7%A6%E5%8F%B3%E4%B8%AD%E5%A4%AE%E6%8F%83%E3%81%88
    height: 44,
    display: "flex",
    // backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Header;
