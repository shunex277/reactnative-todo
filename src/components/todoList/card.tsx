import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";

import { listWidth } from '../styles';

export interface CardProps {
  title: string;
  isDone: boolean;
}

const Card: FC<CardProps> = ({ title = "タスクの名前", isDone = false }) => {
  return (
    <CheckBox
      checked={isDone}
      size={18}
      title={
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
      }
      textStyle={styles.cardTitle}
      containerStyle={styles.cardContainer}
    />
  );
};

export const cardHeight = 64

const styles = StyleSheet.create({
  cardContainer: {
    width: listWidth,
    height: cardHeight,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  cardTitle: {
    fontSize: 15,
    marginLeft: 16,
  },
});

export default Card;