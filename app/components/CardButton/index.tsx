import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants/tokens';
import { styles } from './styles';

type Props = {
  title: string,
  iconName: any;
  onPress?: () => void;
}

export const CardButton = ({ title, iconName, onPress }: Props ) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.cardButton}>
        <Ionicons name={iconName} size={24} color={colors.black} />
        <Text style={styles.cardButtonTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}