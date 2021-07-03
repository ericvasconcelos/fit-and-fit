import { StyleSheet } from 'react-native';
import { colors, font } from './../../constants/tokens';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    fontSize: 18,
    fontFamily: font.family.textRegular,
  },
  inputLight: {
    borderBottomColor: colors.whiteIce,
    color: colors.white,
  }
});
