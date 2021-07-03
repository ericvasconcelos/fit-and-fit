import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

import { colors } from '../../constants/tokens';
import { styles } from './styles';

type Props = {
  title: string;
  onPress?: () => void;
  iconName?: any;
  kind?: 'primary' | 'light'
}

export const Button = ({ title, onPress, iconName, kind = 'primary'}: Props ) => {
  const { primary, primaryDark, primaryClean, bluePale, white } = colors;
  const gradientColors = kind === 'primary' ?
    [primaryDark, primary, primaryClean, bluePale] :
    [white, 'rgba(255,255,255,0.7)'];


  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <LinearGradient 
        style={styles.gradient}
        colors={gradientColors}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      >
        {iconName && (
          <Ionicons
            name={iconName}
            size={24}
            color={white}
          />
        )} 
      
        {title && (
          <Text style={[
            styles.title,
            { color: kind === 'primary' ? white : primary }
          ]}>
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}