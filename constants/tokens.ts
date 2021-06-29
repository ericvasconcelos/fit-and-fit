const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const colors = {
  primary: '#7b1fa2',
  primaryLight: '#ae52d4',
  primaryDark: '#4a0072',
  primaryClean: '#673ab7',
  bluePale: '#5c6bc0',
  gray: '#bdbdbd',
  grayLight: '#e0e0e0',
  grayDark: '#8d8d8d',
  white: '#ffffff',
  whiteIce: '#e0e0e0',
  black: '#1b1b1b'
};

export const font = {
  family: {
    textRegular: 'NotoSans_400Regular',
    textBold: 'NotoSans_700Bold',
    titleLight: 'Ubuntu_300Light',
    titleRegular: 'Ubuntu_400Regular',
    titleMedium: 'Ubuntu_500Medium',
    titleBold: 'Ubuntu_700Bold',
  }
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
