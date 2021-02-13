import {PermissionsAndroid, Platform} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {Alert} from 'react-native';

const ImagePickerWrapper = {
  showImagePicker: async (imagePickerOptions, onResponse) => {
    const permissions = [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE];
    const handler = ImagePicker.launchImageLibrary;
    if (!handler) {
      return;
    }
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.requestMultiple(permissions);
      if (
        result[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] !==
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        Alert.alert('', 'Permissions was not granted');
        onResponse({
          error: 'Permission not set',
        });
        return;
      }
    }
    handler(imagePickerOptions, onResponse);
  },
};

export default ImagePickerWrapper;
