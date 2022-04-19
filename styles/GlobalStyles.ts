import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
  color: inherit;
  text-decoration: none;
}

  *{
    box-sizing: border-box;
  }

  html {
    --primary-light: #42a5f5;
    --primary-main: #1976d2;
    --primary-dark: #1565c0;
    --secondary-light: #ba68c8;
    --secondary-main: #9c27b0;
    --secondary-dark: #7b1fa2;
    --error-light: #ef5350;
    --error-main: #d32f2f;
    --error-dark: #c62828;
    --warning-light: #ff9800;
    --warning-main: #ed6c02;
    --warning-dark: #e65100;
    --info-light: #03a9f4;
    --info-main: #0288d1;
    --info-dark: #01579b;
    --success-light: #4caf50;
    --success-main: #2e7d32;
    --success-dark: #1b5e20;
    --grey-50: #fafafa;
    --grey-100: #f5f5f5;
    --grey-200: #eeeeee;
    --grey-300: #e0e0e0;
    --grey-400: #bdbdbd;
    --grey-500: #9e9e9e;
    --grey-600: #757575;
    --grey-700: #616161;
    --grey-800: #424242;
    --grey-900: #212121;
    --white: #ffffff;
    --black: #000000;
  }
`;
