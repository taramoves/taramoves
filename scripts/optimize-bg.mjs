// One-off: compress the heavy space.png into a web-friendly space.jpg for the hero background.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dir, "..", "public", "images", "home", "space.png");
const out = path.join(dir, "..", "public", "images", "home", "space.jpg");

const info = await sharp(src)
  .resize({ width: 2000, withoutEnlargement: true })
  .jpeg({ quality: 72, mozjpeg: true })
  .toFile(out);

console.log(`space.jpg written: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
