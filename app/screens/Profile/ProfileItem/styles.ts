import { StyleSheet } from 'react-native';
import { font } from '../../../constants/tokens';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 64,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: font.family.titleRegular,
    fontSize: 18,
    paddingLeft: 16,
  },
});
