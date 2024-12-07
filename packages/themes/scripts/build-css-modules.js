import * as theme from "../dist/index.js";
import fs from "fs";

/** 대문자 -> 소문자로  */
const toCssCasting = (str) => {
  return str
    .replace(/([a-z])(\d)/, "$1-$2")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
};

const generateThemeCssVars = () => {
  const cssString = [];
  Object.entries(theme).forEach(([key, value]) => {
    if (key === "colors") {
      Object.entries(value.$values).forEach(([colorKey, colorValue]) => {
        if (colorKey === "light") {
          const selector = ":root";
          const cssVariables = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subkey, subValue]) =>
                    `--${toCssCasting(mainKey)}-${toCssCasting(
                      subkey
                    )}: ${subValue};`
                )
                .join("\n")
            )
            .join("\n");
          return cssString.push(`${selector} {${cssVariables}}`);
        }
        if (colorKey === "dark") {
          const selector = ":root .theme-dark";
          const cssVariables = Object.entries(colorValue)
            .map(([mainKey, mainValue]) =>
              Object.entries(mainValue)
                .map(
                  ([subkey, subValue]) =>
                    `--${toCssCasting(mainKey)}-${toCssCasting(
                      subkey
                    )}: ${subValue};`
                )
                .join("\n")
            )
            .join("\n");
          return cssString.push(`${selector} {${cssVariables}}`);
        }
      });
      return;
    }
    const selector = ":root";
    const cssVariables = Object.entries(value)
      .map(([mainKey, mainValue]) =>
        Object.entries(mainValue)
          .map(
            ([subkey, subValue]) =>
              `--${toCssCasting(mainKey)}-${toCssCasting(subkey)}: ${subValue};`
          )
          .join("\n")
      )
      .join("\n");
    return cssString.push(`${selector} {${cssVariables}}`);
  });
  return cssString;
};
const generateThemeCss = () => {
  const varibales = generateThemeCssVars();
  fs.writeFileSync("dist/themes.css", [...varibales].join("\n"));
};
generateThemeCss();

/** @desc 기본 컬러 Generator */
// const generateThemeCssVars = () => {
//   const cssString = [];
//   Object.entries(theme.vars).forEach(([key, value]) => {
//     if (key === "colors") {
//       Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
//         if (colorKey === "light") {
//           const selector = ":root";
//           const cssVariables = Object.entries(colorValue)
//             .map(([mainKey, mainValue]) =>
//               Object.entries(mainValue)
//                 .map(
//                   ([subkey, subValue]) =>
//                     `--${toCssCasting(mainKey)}-${toCssCasting(
//                       subkey
//                     )}: ${subValue};`
//                 )
//                 .join("\n")
//             )
//             .join("\n");
//           return cssString.push(`${selector} {${cssVariables}}`);
//         }
//         if (colorKey === "dark") {
//           const selector = ":root .theme-dark";
//           const cssVariables = Object.entries(colorValue)
//             .map(([mainKey, mainValue]) =>
//               Object.entries(mainValue)
//                 .map(
//                   ([subkey, subValue]) =>
//                     `--${toCssCasting(mainKey)}-${toCssCasting(
//                       subkey
//                     )}: ${subValue};`
//                 )
//                 .join("\n")
//             )
//             .join("\n");
//           return cssString.push(`${selector} {${cssVariables}}`);
//         }
//       });
//       return;
//     }
//     const selector = ":root";
//     const cssVariables = Object.entries(value)
//       .map(([mainKey, mainValue]) =>
//         Object.entries(mainValue)
//           .map(
//             ([subkey, subValue]) =>
//               `--${toCssCasting(mainKey)}-${toCssCasting(subkey)}: ${subValue};`
//           )
//           .join("\n")
//       )
//       .join("\n");
//     return cssString.push(`${selector} {${cssVariables}}`);
//   });
//   return cssString;
// };

// const generateThemeCss = () => {
//   const varibales = generateThemeCssVars();
//   fs.writeFileSync("dist/themes.css", [...varibales].join("\n"));
// };

// generateThemeCss();c
