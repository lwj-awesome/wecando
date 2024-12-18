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
  });
  return cssString;
};

// 뎁스를 더 들어가야할듯ㅎㅎ
const generateThemeCssClasses = () => {
  const cssString = [];
  Object.entries(theme).forEach(([key, value]) => {
    if (key === "fonts") {
      const cssClasses = Object.entries(value)
        .map(([mainKey, mainValue]) =>
          Object.entries(mainValue)
            .map(([subKey, subValue]) => {
              const className = `.${toCssCasting(mainKey)}${toCssCasting(subKey)}`;
              const styleProperties = Object.entries(subValue)
                .map(
                  ([styleKey, styleValue]) =>
                    `${toCssCasting(styleKey)}: ${styleValue};`
                )
                .join("\n");

              return `${className} {\n${styleProperties}\n}`;
            })
            .join("\n")
        )
        .join("\n");

      cssString.push(cssClasses);
    }
  });
  return cssString;
};

const generateCssVars = () => {
  const cssString = [];
  Object.entries(theme).forEach(([key, value]) => {
    if (key === "vars") {
      const selector = ":root";
      const cssVariables = Object.entries(value)
        .map(([mainKey, mainValue]) =>
          Object.entries(mainValue)
            .map(
              ([subKey, subValue]) =>
                `--${toCssCasting(mainKey)}-${toCssCasting(subKey)}: ${subValue};`
            )
            .join("\n")
        )
        .join("\n");
      return cssString.push(`${selector} {\n${cssVariables}\n}`);
    }
  });
  return cssString;
};

const generateThemeCss = () => {
  const varibales = generateThemeCssVars();
  const typography = generateThemeCssClasses();
  const variable = generateCssVars();
  fs.writeFileSync(
    "dist/themes.css",
    [...varibales, ...typography, ...variable].join("\n")
  );
};
generateThemeCss();
