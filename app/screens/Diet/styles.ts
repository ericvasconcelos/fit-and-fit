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
  macro: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  macroItem: {
    flexDirection: 'row',
    width: '50%',
    marginBottom: 8,
  },
  macroName: {
    marginRight: 4,
    fontFamily: font.family.textBold,
    fontSize: 14,
  },
  macroWeight: {
    fontFamily: font.family.textRegular,
    fontSize: 14,
  },
  // options of food search
  loaderWrapper: {
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodList: {

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
