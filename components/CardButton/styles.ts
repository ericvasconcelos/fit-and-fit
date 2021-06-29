import { StyleSheet } from 'react-native';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  cardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    borderWidth: 2,
    borderColor: colors.gray,
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  cardButtonTitle: {
    marginLeft: 8,
    color: colors.black,
    fontFamily: font.family.titleBold,
    fontSize: 16,
  }
});