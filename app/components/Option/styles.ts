import { StyleSheet } from 'react-native';
import { colors } from '../../constants/tokens';

export const styles = StyleSheet.create({
  optionContainer: {
    width: '100%', 
    paddingHorizontal: 24,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',
    width: '100%', 
    height: 68,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
  },
  labelOption: {
    color: colors.white,
    fontSize: 16,
    fontWeight:'bold',
  },
});
