import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    external: ["ms"],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      process.env.NODE_ENV === "production" && uglify()
    ]
  }
];
