import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "media",
  mode: "silent",
};
if (IS_BROWSER) setup(config);
