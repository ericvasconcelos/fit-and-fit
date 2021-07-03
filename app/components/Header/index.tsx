import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { colors } from '../../constants/tokens';
import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode;
  removeGoBack?: boolean;
  transparent?: boolean;
}

export const Header = ({ title, action, removeGoBack = false, transparent = false }: Props ) => {
  const navigation = useNavigation();
  const { primary, primaryDark, primaryClean, bluePale, white } = colors;

  const handleGoBack = () => navigation.goBack();

  return (
    <LinearGradient 
      style={styles.container}
      colors={transparent ? ['transparent', 'transparent'] : [primaryDark, primary, primaryClean, bluePale]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.innerContainer}>
        {removeGoBack ? (
          <View style={{ width: 24 }}/>
        ) : (
          <BorderlessButton onPress={handleGoBack}>
            <Ionicons 
              name="arrow-back-outline"
              size={24}
              color={white}
            />
          </BorderlessButton>
        )}
        
        <Text style={styles.title}>
          {title}
        </Text>

        {action ? (
          <View>{action}</View>
        ) : (
          <View style={{ width: 24 }}/>
        )}
      </View>
    </LinearGradient>
  );
}