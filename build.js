#! node

import esbuild from "esbuild";
import htmlPlugin from "@chialab/esbuild-plugin-html";

await esbuild.build({
  entryPoints: ["index.html"],
  plugins: [
    htmlPlugin({
      // esbuild: esbuild,
      // scriptsTarget: 'es6',
      // modulesTarget: 'es2020',
    }),
  ],
});
