import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../types/type';

export type HomeScreen = NativeStackScreenProps<RootStackParamsList, "Home">

export type SettingScreen = NativeStackScreenProps<RootStackParamsList, "Settings">