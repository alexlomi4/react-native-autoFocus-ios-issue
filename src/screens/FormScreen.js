import React, {useCallback} from 'react';
import {View, Button, StyleSheet, TextInput, Text} from 'react-native';
import {commonStyles} from '../styles';

const FormScreen = ({navigation}) => {
  const onToFormsPress = useCallback(() => {
    navigation.navigate('ImagePicker');
  }, [navigation]);

  return (
    <View style={commonStyles.contentWrapper}>
      <View style={styles.row}>
        <Text>autoFocus input</Text>
        <TextInput style={styles.input} value={'test'} autoFocus />
        <Button
          style={styles.button}
          onPress={onToFormsPress}
          title={'To Picking image'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 100,
    height: 40,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'blue',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default React.memo(FormScreen);
