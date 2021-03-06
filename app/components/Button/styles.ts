import { StyleSheet } from 'react-native';
import { font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  gradient: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    marginLeft: 8,
    fontFamily: font.family.titleBold,
    fontSize: 16,
  }
});