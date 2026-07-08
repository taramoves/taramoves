// One-off: convert star.jpg (baked light/checkerboard bg) -> transparent star.png
// Flood-fills background-colored pixels from the borders so interior highlights stay.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(dir, "..", "public", "images", "home", "star.jpg");
const out = path.join(dir, "..", "public", "images", "home", "star.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const idx = (x, y) => (y * width + x) * channels;

// Background = light AND low-saturation (white or gray checker squares).
const isBg = (x, y) => {
  const i = idx(x, y);
  const r = data[i],
    g = data[i + 1],
    b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return max > 140 && max - min < 32;
};

const visited = new Uint8Array(width * height);
const stack = [];
const pushIf = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (visited[p]) return;
  visited[p] = 1;
  if (isBg(x, y)) stack.push(x, y);
};

for (let x = 0; x < width; x++) {
  pushIf(x, 0);
  pushIf(x, height - 1);
}
for (let y = 0; y < height; y++) {
  pushIf(0, y);
  pushIf(width - 1, y);
}

let cleared = 0;
while (stack.length) {
  const y = stack.pop();
  const x = stack.pop();
  data[idx(x, y) + 3] = 0; // transparent
  cleared++;
  pushIf(x + 1, y);
  pushIf(x - 1, y);
  pushIf(x, y + 1);
  pushIf(x, y - 1);
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(out);

console.log(`star.png written (${width}x${height}), cleared ${cleared} bg px`);
