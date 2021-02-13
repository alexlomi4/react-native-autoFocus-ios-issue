import React, {useCallback} from 'react';
import {View, Button} from 'react-native';
import ImagePickerWrapper from '../ImagePickerWrapper';
import {commonStyles} from '../styles';

const ImagePickerScreen = () => {
  const onPickImagePress = useCallback(() => {
    ImagePickerWrapper.showImagePicker({}, (res) => {
      console.log(res);
    });
  }, []);

  return (
    <View style={commonStyles.contentWrapper}>
      <Button onPress={onPickImagePress} title={'Pick image'} />
    </View>
  );
};

export default React.memo(ImagePickerScreen);
