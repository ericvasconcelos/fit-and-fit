import { StyleSheet } from 'react-native';
import { colors } from '../../constants/tokens';

export const styles = StyleSheet.create({
  container: {
    width: '100%', 
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',    
    justifyContent: 'space-between',
    width: '100%', 
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,  
  },
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
    color: '#ffffff',
    fontSize: 16,
    fontWeight:'bold',
  },
});
