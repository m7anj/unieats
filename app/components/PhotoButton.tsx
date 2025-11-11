import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface PhotoButtonProps {
  onPress: () => void;
}

export const PhotoButton = ({
   onPress }: PhotoButtonProps) =>
    (<TouchableOpacity 
      style={styles.button}
      onPress={onPress}
    />
);

const styles =
StyleSheet.create({
    button: {
      width: 70,
      height: 20,
      borderRadius: 35,
      backgroundColor: 'white',
      borderWidth: 4,
      borderColor:
  'rgba(255,255,255,0.5)',
    }
  });


export default PhotoButton;