import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageBackgroundProps, Text } from 'react-native';

import { colors } from '../../constants/tokens';
import { styles } from './styles';

export type CardImageProps = {
  id: string;
  title: string;
  subtitle?: string;
  image: ImageBackgroundProps;
}

type Props = TouchableOpacityProps & {
  item: CardImageProps,
  onPress?: (id: string) => void;
}

export const CardImagem = ({ item, onPress }: Props ) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <ImageBackground
        source={item.image}
        style={styles.banner}
      >
        <LinearGradient 
          style={styles.bannerContent}
          colors={['transparent', colors.black]}
        >
          <Text style={styles.bannerTitle}>
            {item.title}
          </Text>

          <Text style={styles.bannerSubtitle}>
            {item.subtitle}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
