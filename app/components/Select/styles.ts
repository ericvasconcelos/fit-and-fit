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
    height: 52,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLight,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 18,  
  },
});
