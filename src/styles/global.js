import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,600|Roboto:100,300,700|Libre+Franklin:100:300,400|Libre+Baskerville|Major+Mono+Display&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
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
  html {
    font-size: 62.5%;
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
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4 {
    font-family: "Libre Baskerville", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  body {
    overflow-x: hidden;
    background: var(--body-bg);
    font-weight: 400;
    font-family: "Libre Franklin", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    font-size: 1.5rem;
    line-height: 150%;
    ${media.greaterThan('large')`
      font-size: 1.7rem;
    `}
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }
  a {
    color: var(--primaryColor)
  }
  .notification {
    opacity: 0.7 !important;
    border-radius: 5px !important;
  }
  .notification-info {
    background-color: #67b246 !important;
  }
  .no-scroll {
    overflow: hidden;
    max-height: 100vh;
  }
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-track-piece {
    visibility: none;
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: rgba(0,0,0,0.3);
  }

  :root { 
    --font-face-san-serif: 'Libre Franklin';
    --font-face-san-serif2: 'Roboto';
    --font-face-serif: 'Libre Baskerville';

    --gray-extra-light: #eaeaea; 
    --gray-light: #747d8d;  
    --gray: #475060;
    --gray-dark: #2e333e;

    --primary-color: #67b246;
    --secondary-color: #2e333e;
    --thirdy-color: #001ff9;

    --body-bg: #FFFFFF; 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: var(--primary-color);
    --link-color-hover: var(--thirdy-color);

    --text-color: var(--gray);
    --text-light:var(--gray-light);
    --text-dark: var(--gray-dark);

    --width-container: 1170px;

    --space: 2rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 3rem;

  }
`
export default GlobalStyles
