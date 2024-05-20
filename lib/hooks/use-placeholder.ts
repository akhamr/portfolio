import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export async function getImage(src: string) {
  const buffer = src.startsWith("/")
    ? await fs.readFile("./public" + src)
    : await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
  const { base64 } = await getPlaiceholder(buffer, { size: 32 });

  return base64;
}
