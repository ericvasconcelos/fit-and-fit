import React from 'react';
import { Text, View, TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

type Props = TextInputProps & {
  label?: string;
  icon?: any;
};

export function Input({ label, icon, ...rest }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput style={styles.input} {...rest} />
    </View>
  )
}
