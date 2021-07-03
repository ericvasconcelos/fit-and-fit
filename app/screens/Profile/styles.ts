import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: getStatusBarHeight(),
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  wrapperImg: {
    width: 84,
    height: 84,
    marginRight: 16,
    borderRadius: 52,
    borderColor: colors.primaryDark,
    borderWidth: 2,
  },
  imgProfile: {
    width: 80,
    height: 80,
    borderRadius: 52,
  },
  greeting: {
    fontSize: 16,
    fontFamily: font.family.titleLight,
  },
  name: {
    fontSize: 28,
    fontFamily: font.family.titleBold,
  },
  itemSeparator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grayLight,
    alignSelf: 'flex-end',
  },
  version: {
    height: 64,
    justifyContent: 'center',
    borderTopColor: colors.grayLight,
    borderTopWidth: 1,
  },
  versionText: {
    color: colors.grayDark,
    fontFamily: font.family.textRegular,
    fontSize: 14,
    textAlign: 'center',
  },
  versionDate: {
    color: colors.grayDark,
    fontFamily: font.family.textRegular,
    fontSize: 14,
    textAlign: 'center',
  }
});
