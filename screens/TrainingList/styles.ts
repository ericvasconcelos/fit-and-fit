import { StyleSheet } from 'react-native';
import { colors, font } from '../../constants/tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 4,
    paddingTop: 24,
    fontFamily: font.family.titleBold,
    fontSize: 20,
  },
  sectionSubtitle: {
    fontFamily: font.family.textRegular,
    fontSize: 14,
    marginBottom: 16,
  },
});
