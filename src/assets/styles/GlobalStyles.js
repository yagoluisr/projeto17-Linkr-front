import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        overflow-x: hidden;
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
    button {
        border: none;
    }
    input {
        border: none;
    }
    a {
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }

    :root {
        --main-font: 'Lato', sans-serif;
        --logo-font: 'Passion One', sans-serif;
        --titles-font: 'Oswald', sans-serif;
        --background-gray: #333333;
        --background-black: #151515;
        --main-white: #FFFFFF;
        --secondary-white: #EFEFEF;
        --post-background-black: #171717;
        --font-gray: #B7B7B7;
        --font-black: #333333;
        --accent-color: #1877F2;
        --placeholder-font-gray: #9F9F9F;
        --input-disabled-gray: lightgray;
        --trending-hr: #484848;
        --like-red: #AC0000;
        --background-comments-gray: #1E1E1E;
        --background-comments-input: #252525;
        --font-comments-gray: #ACACAC;
        --font-comments-span: #565656;
        --font-comments-white: #F3F3F3;
        --font-comments-input: #575757;
        --comments-border: #353535;
    }
`;

export default GlobalStyles;
