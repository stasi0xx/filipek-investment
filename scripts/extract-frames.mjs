import { execFileSync } from "child_process";
import { createRequire } from "module";
import path from "path";

const require = createRequire(import.meta.url);
const ffmpeg  = require("ffmpeg-static");

const input  = path.resolve("public/assets/film.mp4");
const output = path.resolve("public/assets/frames/frame_%04d.jpg");

console.log("Extracting frames…");
execFileSync(ffmpeg, [
  "-i", input,
  "-vf", "fps=25",
  "-q:v", "3",
  "-y",
  output,
], { stdio: "inherit" });

console.log("Done.");
