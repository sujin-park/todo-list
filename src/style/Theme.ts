export const dark = {
  boxShadow: '2px 2px 2px 2px #ffffff61',
  colors: {
    primary: '#FF922B',
    text: '#fff',
    lightGrey: '#888',
    light: 'rgba(#fff, 0.8)',
    contents: '#000',
    bg: '#000',
  },
};

export const light = {
  boxShadow: '2px 2px 2px 2px #d2cfcf',
  colors: {
    primary: '#FF922B',
    text: '#000',
    lightGrey: '#D3D3D3',
    light: '#fff',
    contents: '#fff',
    bg: '#e9ecef',
  },
};

export type ThemeType = typeof dark | typeof light;
