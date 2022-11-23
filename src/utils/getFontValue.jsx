// ----------------------------------------------------------------------

/**
 * Convert a pixel value to a rem value.
 */
export const pxToRem = (value) => `${value / 16}rem`;

/**
 * This function takes an object with three properties, each of which is a number, and returns an
 * object with three properties, each of which is a string.
 * @returns An object with three keys, each with a value of a media query.
 */
export const responsiveFontSizes = ({ sm, md, lg }) => {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
};
