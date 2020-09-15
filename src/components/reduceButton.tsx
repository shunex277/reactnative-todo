import React, {FC} from "react";
import {View, StyleSheet} from "react-native";
import {Button} from "react-native-elements";

interface reduceButtonProps {
    onPress?: () => void;
}

const ReduceButton: FC<reduceButtonProps> = ({onPress= () => {}}) => {
  return (
    <View style={styles.component}>
      <Button
        title="REDUCE"
        buttonStyle={styles.buttonStyle}
        onPress={onPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  component: {
    position: "absolute",
    marginRight: 16,
    marginBottom: 32,
    right: 0,
    bottom: 0,
  },
  buttonStyle: {
    width: 155,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#FF0000'
  }
});

export default ReduceButton;