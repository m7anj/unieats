import React from 'react';
import { Button, Text, View } from 'react-native';

import { CameraView, useCameraPermissions } from 'expo-camera';

const camera = () => {

  const [permission, requestPermission] = useCameraPermissions();

  if (permission === null) {
    return <View><Text>Loading...</Text></View>
  }

  if (!permission.granted) {
    return <View>
      <Button onPress={requestPermission} title='Access Camera'></Button>
      </View>
  }

  return (
    <CameraView style={{ flex: 1}}>
    </CameraView>
  );
}

export default camera;