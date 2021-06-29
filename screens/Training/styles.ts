import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingHorizontal: 24,
    marginTop: getStatusBarHeight(),
  },
  headerTitle: {
    flex: 1,
    fontFamily: font.family.titleMedium,
    textAlign: 'center',
    fontSize: 22,
    color: colors.white,
  },
  title: {
    marginBottom: 16,
    color: colors.white,
    fontFamily: font.family.titleMedium,
    fontSize: 32,
  },
  description: {
    color: colors.whiteIce,
    fontFamily: font.family.textRegular,
    lineHeight: 22,
  },
  sectionTitle: {
    marginBottom: 16,
    paddingTop: 24,
    color: colors.white,
    fontFamily: font.family.titleBold,
    fontSize: 20,
  },
  exercise: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseImage: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: colors.white,
  },
  exerciseInfos: {
    marginLeft: 16,
  },
  exerciseName: {
    marginBottom: 4,
    color: colors.white,
    fontFamily: font.family.textBold,
    fontSize: 16,
  },
  exerciseExecution: {
    color: colors.white,
    fontFamily: font.family.textRegular,
    fontSize: 14,
  },
  itemSeparator:{
    width: '80%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginVertical: 8,
    alignSelf: 'flex-end',
  }
});
