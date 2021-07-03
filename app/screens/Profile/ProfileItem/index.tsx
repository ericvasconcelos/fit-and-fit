import React from 'react';
import { Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../../constants/tokens';

type Props = RectButtonProps & {
  data: {
    id: string;
    title: string;
    icon: any; // 'person-outline' | 'help-circle-outline' | 'information-circle-outline' | 'log-out-outline'
    iconColor: string,
    page?: string;
  };
};

export function ProfileItem({ data, ...rest }: Props) {
  
  return (
    <RectButton style={styles.item} {...rest}>
      <View style={styles.itemLeft}>
        <Ionicons name={data.icon} size={26} color={data.iconColor || colors.black} />
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </RectButton>
  )
}
