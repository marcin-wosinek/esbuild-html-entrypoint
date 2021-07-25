#! node

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/main.js",
  })
  .catch(() => process.exit(1));
