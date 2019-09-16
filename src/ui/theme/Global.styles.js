export const GlobalStyles = `
  /* Remove the margin in all browsers */
  body {
    margin: 0;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-family: "Helvetica", sans-serif;
    overflow-x: hidden;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  /* 1. Correct the line height in all browsers. */
  /* 2. Prevent adjustments of font size after orientation changes in iOS. */
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.15;
    -ms-overflow-style: scrollbar;
    -webkit-text-size-adjust: 100%;
  }

  /* Render the 'main' element consistently in IE */
  main {
    display: block;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Remove the margin in Firefox and Safari */
  button,
  input {
    margin: 0;
  }

  /* Correct the inability to style clickable types in iOS and Safari */
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    font-family: inherit;
    cursor: pointer;
    -webkit-appearance: button;

    /* Remove the inner border and padding in Firefox */
    &::-moz-focus-inner {
      padding: 0;
      border-style: none;
    }

    /* Restore the focus styles unset by the previous rule */
    &:-moz-focusring {
      outline: 1px dotted ButtonText;
    }

    /* Remove outline around element when focusing */
    &:focus {
      outline: 0;
    }
  }

  /* Correct the odd appearance in Safari */
  input[type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;

    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  }

  table, th, td {
    border: 1px solid black;
  }
`;

export default GlobalStyles;
