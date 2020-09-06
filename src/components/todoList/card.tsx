import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox, Button } from "react-native-elements";
import { SwipeRow } from "react-native-swipe-list-view";

import { listWidth, screenWidth } from "../styles";

export interface CardProps {
  title: string;
  isDone: boolean;
  deleteTask?: () => void;
  toggleIsDone?: () => void;
}

const Card: FC<CardProps> = ({
  title,
  isDone, 
  deleteTask = () => {},
  toggleIsDone = () => {},
}) => {
  return (
    <SwipeRow
      rightOpenValue={-75}
      disableRightSwipe={true}
    >
      <View style={styles.backContainer}>
        <Button
          title="削除"
          type="clear"
          titleStyle={styles.backTextWhite}
          containerStyle={styles.backTextContainer}
          onPress={deleteTask}
        />
      </View>
      <View style={styles.cardContainer}>
        <CheckBox
          checked={isDone}
          size={18}
          title={
            <View>
              <Text style={styles.cardTitle}>{title}</Text>
            </View>
          }
          textStyle={styles.cardTitle}
          containerStyle={styles.checkBoxContainer}
          onPress={toggleIsDone}
        />
      </View>
    </SwipeRow>
  );
};

export const cardHeight = 64;

const styles = StyleSheet.create({
  container: {
    // width: listWidth,
    height: cardHeight,
    justifyContent: "center",
    alignContent: "center",
  },
  cardContainer: {
    width: listWidth,
    height: cardHeight,
    marginHorizontal: 16,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },
  checkBoxContainer: {
    backgroundColor: "white",
    borderColor: "white",
  },
  backContainer: {
    width: listWidth - 8,
    height: cardHeight,
    backgroundColor: "red",
    justifyContent: "flex-end",
    alignContent: "center",
    marginLeft: 16,
    borderRadius: 16,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 20,
    marginLeft: 16,
  },
  backTextContainer: {
    width: 75,
    justifyContent: "center",
    // backgroundColor: 'blue',
  },
  backTextWhite: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default Card;
