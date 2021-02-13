import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FormScreen from './FormScreen';
import ImagePickerScreen from './ImagePickerScreen';

const StackNavigator = createStackNavigator(
  {
    Forms: FormScreen,
    ImagePicker: ImagePickerScreen,
  },
  {
    initialRouteName: 'Forms',
    headerMode: 'screen',
  },
);

export default createAppContainer(StackNavigator);
