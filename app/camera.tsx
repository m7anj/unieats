import React from 'react';
import { Button, Text, View } from 'react-native';

import { CameraView, useCameraPermissions } from 'expo-camera';

import { PhotoButton } from './components/PhotoButton';

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

  const test = () => {
    console.log('test')
  }

  return (
    <View style={{ flex: 1 }}>

      <CameraView style={{ flex: 1 }}>
      </CameraView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <PhotoButton onPress={test}></PhotoButton>

      </View>
      
    </View>
  );
}

export default camera;