import { StyleSheet } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  goBack: {
    position: 'absolute',
    zIndex: 1,
    top: getStatusBarHeight() + 16,
    left: 24,
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 48,
  },
  title: {
    marginTop: getStatusBarHeight() + 80,
    marginBottom: 16,
    color: colors.white,
    fontFamily: font.family.titleMedium,
    fontSize: 32,
  },
  description: {
    marginBottom: 24,
    color: colors.whiteIce,
    fontFamily: font.family.textRegular,
    lineHeight: 22,
  },
  infos: {
    marginBottom: 24,
  },
  infosRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '38%',
  },
  infoItemText: {
    marginLeft: 8,
    color: colors.white,
    fontFamily: font.family.textRegular,
    fontSize: 12,
  },
  sectionTitle: {
    marginBottom: 24,
    color: colors.white,
    fontFamily: font.family.titleBold,
    fontSize: 20,
  },
  exerciseList: {
    marginBottom: getBottomSpace() + 58,
  },
  serie: {
    marginBottom: 24,
  },
  serieInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  serieType: {
    color: 'rgba(255,255,255,0.6)',
    fontFamily: font.family.textRegular,
    fontSize: 18,
  },
  tag: {
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 4,
    borderRadius: 4, 
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  tagText: {
    color: colors.white, 
    fontFamily: font.family.titleLight,
    fontSize: 13,
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
  exerciseInfosTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  exerciseName: {
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
  },
  action: {
    position: 'absolute',
    bottom: getBottomSpace() + 16,
    width: '100%',
    paddingHorizontal: 24,
  }
});
