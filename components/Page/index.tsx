import React, { ReactNode } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
} from 'react-native';

import { styles } from './styles';

type Props = {
  children: ReactNode;
}

export const Page = ({ children }: Props) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}
  >
    {children}
  </KeyboardAvoidingView>
);

