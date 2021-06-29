import { StyleSheet } from 'react-native';
import { colors } from '../../constants/tokens';

export const styles = StyleSheet.create({
  switch: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
  },
  label: {
    fontSize: 14,
  }
});
