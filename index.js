/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import ColorScreen from './colorScreen';
// import LineChart from './sampleGraph';
import MyDrawerNav from './drawerNavigation/mydrawernav';
AppRegistry.registerComponent(appName, () => MyDrawerNav);
