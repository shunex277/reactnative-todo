import React, { FC } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import { SwipeRow } from 'react-native-swipe-list-view';

import { listWidth } from '../styles';

export interface CardProps {
  title: string;
  isDone: boolean;
}

const Card: FC<CardProps> = ({ title = "", isDone = false }) => {
  return (
    <SwipeRow rightOpenValue={-75} disableRightSwipe={true} style={styles.cardContainer}>
      <View style={styles.standaloneRowBack}>
        <Text style={styles.backTextWhite}>Right</Text>
      </View>
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
    </SwipeRow>
  );
};

export const cardHeight = 64

const styles = StyleSheet.create({
  container: {
    // width: listWidth,
    height: cardHeight,
    justifyContent: "center",
    alignContent: 'center',
  },
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
  standaloneRowBack: {
    width: listWidth,
    height: cardHeight,
    borderRadius: 16,
    alignItems: 'center',
    // backgroundColor: 'gray',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  backTextWhite: {
    color: '#FFF',
  },

});

export default Card;
