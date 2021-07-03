import { StyleSheet } from 'react-native';
import { colors } from '../../constants/tokens';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: colors.primaryDark,
  },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.gray,
    alignSelf: 'center',
    marginTop: 13,
  }
});