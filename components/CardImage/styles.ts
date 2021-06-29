import { StyleSheet } from 'react-native';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  banner: {
    width: 300,
    height: 200,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bannerContent: {
    justifyContent: 'flex-end',
    height: '100%',
    paddingHorizontal: 24,
  },
  bannerTitle: {
    marginBottom: 4,
    color: colors.white,
    fontFamily: font.family.titleMedium,
    fontSize: 20,
  },
  bannerSubtitle: {
    marginBottom: 24,
    color: colors.white,
    fontFamily: font.family.textRegular,
    fontSize: 14,
    lineHeight: 21,
  },
});