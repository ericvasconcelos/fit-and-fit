import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
  children: ReactNode,
};

export const Container = ({ children }: Props) => (
  <View style={styles.container}>
    {children}
  </View>
);