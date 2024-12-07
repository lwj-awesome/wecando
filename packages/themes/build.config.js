import run from "@wecando/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
