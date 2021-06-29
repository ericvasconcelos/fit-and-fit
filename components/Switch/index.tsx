import React from 'react';
import { Text, View, Switch as SwitchComp, SwitchProps } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constants/tokens';

type Props = SwitchProps & {
  labelOn?: string;
  labelOff?: any;
  value: boolean;
  toggle: () => void;
};

export const Switch = ({ labelOn, labelOff, toggle, value,  ...rest }: Props) => {
  return (
    <View style={styles.switch}>
      <View style={styles.content}>
      <Text style={styles.label}>{value ? labelOn : labelOff}</Text>
        <SwitchComp
          trackColor={{ false: "#d1d1d1", true: colors.primary }}
          thumbColor="#f4f3f4"
          onValueChange={toggle}
          value={value}
          {...rest}
        />
      </View>
      
    </View>
  )
}


