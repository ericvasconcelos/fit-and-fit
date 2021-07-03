import React from 'react';
import { Text, View, TextInput, TextInputProps } from 'react-native';
import { colors } from '../../constants/tokens';
import { styles } from './styles';

type Props = TextInputProps & {
  label?: string;
  icon?: any;
  kind?: 'default' | 'light';
};

export function Input({ label, icon, kind, ...rest }: Props) {
  let inputStyle = [
    styles.input,
    kind === 'light' && styles.inputLight,
  ];

  const placeholderColor = kind === 'light' ? 'rgba(255,255,255, 0.6)' : colors.grayDark;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={inputStyle}
        placeholderTextColor={placeholderColor}
        {...rest}
      />
    </View>
  )
}
