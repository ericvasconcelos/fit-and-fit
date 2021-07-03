import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

type Props = BorderlessButtonProps & {
  data: any;
  label: string;
  onPress: (id: string) => void;
};

export const Option = ({ data, label, onPress }: Props) => (
  <BorderlessButton style={styles.optionContainer} onPress={onPress}>
    <View style={styles.option}>
      <Text style={styles.labelOption}>
        {data[label]}
      </Text>
      <Ionicons name="chevron-forward" size={24} color="white" />
    </View>
  </BorderlessButton>
);
