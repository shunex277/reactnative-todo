import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Overlay, Input } from "react-native-elements";

import { listWidth } from '../styles';
import {cardHeight} from './card';

interface addButtonProps {
  // 新規タスクを追加するためのフォームの表示非表示
  isVisibleOvarlay: boolean;
  onPress: () => void;

  onChangeText: (text: string) => void;

  // タスクを追加する関数
  addTask: () => void;
}

const AddButton: FC<addButtonProps> = ({
  isVisibleOvarlay=false,
  onPress=()=> {},
  onChangeText = () => {},
  addTask= () => {},
}) => (
  <View style={{ marginBottom: 16 }}>
    <Button
      title="add Task"
      titleStyle={styles.addButtonText}
      type="outline"
      buttonStyle={styles.addButton}
      onPress={onPress}
    />
    <Overlay
      isVisible={true}
      overlayStyle={styles.overlayItem}
      onBackdropPress={onPress}
    >
      <View style={{margin: 8}}>
        <Input
          placeholder='add your task'
          containerStyle={{marginTop: 16}}
          onChangeText={onChangeText}
        />
        <Button
          title='ADD'
          buttonStyle={{marginBottom: 16}}
          onPress={addTask}
        />
        </View>
    </Overlay>
  </View>
);

const styles = StyleSheet.create({
  addButton: {
    width: listWidth,
    height: cardHeight,
    borderStyle: 'dashed',
    borderRadius: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },
  addButtonText: {
    color: 'gray',
  },
  overlayItem: {
    width: listWidth - 32,
    borderRadius: 16,
  }
});

export default AddButton;