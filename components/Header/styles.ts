import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: getStatusBarHeight() + 64,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 24,
  },
  title: {
    flex: 1,
    fontFamily: font.family.titleMedium,
    textAlign: 'center',
    fontSize: 22,
    color: colors.white,
  }
});