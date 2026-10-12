// Generates the optimized images in public/assets/ from the originals in assets-src/.
// Run with `npm run images` after adding or replacing an original.
import { copyFile, mkdir, readdir, rm, stat } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import sharp from 'sharp'

const root = resolve(import.meta.dirname, '..')
const src = (f) => join(root, 'assets-src', f)
const out = (f) => join(root, 'public', 'assets', f)

// Responsive photo widths; must match the srcset() helper in src/content.js.
const PHOTO_WIDTHS = [700, 1200]
const photos = ['tomato-sky-hero']
// Supplied as small WebP logos already; copied unchanged.
const copied = ['vardenia-logo-en.webp', 'virgin-valley-logo.webp']

await rm(join(root, 'public', 'assets'), { recursive: true, force: true })
await mkdir(join(root, 'public', 'assets'), { recursive: true })

const jobs = []
for (const name of photos) {
  const file = (await readdir(join(root, 'assets-src'))).find((f) => f.startsWith(name + '.'))
  for (const w of PHOTO_WIDTHS) {
    jobs.push(
      sharp(src(file))
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(out(`${name}-${w}.webp`)),
    )
  }
}

for (const f of copied) jobs.push(copyFile(src(f), out(f)))

// Bright logo on its business card (about 190x100 CSS px), at 2x.
jobs.push(
  sharp(src('logo.png'))
    .resize({ width: 400 })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(out('bright-logo-400.webp')),
)

// Logo: header (165 CSS px) and CEO page (up to 340 CSS px), at 2x.
for (const w of [360, 700]) {
  jobs.push(
    sharp(src('holding-logo.png'))
      .resize({ width: w })
      .webp({ quality: 90, alphaQuality: 100 })
      .toFile(out(`holding-logo-${w}.webp`)),
  )
}

// Be Right wordmark (transparent, shown at most ~600 CSS px wide).
jobs.push(
  sharp(src('be-right-wordmark.png'))
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(out('be-right-wordmark.webp')),
)

// Favicons from the light-bulb mark on the left of the logo. The crop's lower-right
// corner overlaps the "BRIGHT"/"HOLDING" wordmark, so it is cut away before trimming.
const wordmark = await sharp({
  create: { width: 200, height: 400, channels: 4, background: '#000' },
})
  .png()
  .toBuffer()
const bulb = await sharp(src('holding-logo.png'))
  .extract({ left: 140, top: 80, width: 560, height: 870 })
  .composite([{ input: wordmark, left: 440, top: 520, blend: 'dest-out' }])
  .toBuffer()
  .then((b) => sharp(b).trim().toBuffer())
const square = (size, background) =>
  sharp(bulb).resize(size, size, { fit: 'contain', background }).png({ compressionLevel: 9 })
const clear = { r: 0, g: 0, b: 0, alpha: 0 }
jobs.push(
  square(32, clear).toFile(out('favicon-32.png')),
  square(192, clear).toFile(out('icon-192.png')),
  sharp(bulb)
    .resize(150, 150, { fit: 'contain', background: '#ffffff' })
    .extend({ top: 15, bottom: 15, left: 15, right: 15, background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(out('apple-touch-icon.png')),
)

// Social sharing preview (Open Graph): 1200x630. real-hero is no longer on the site; it is kept as the source of this image.
jobs.push(
  sharp(src('real-hero.webp'))
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out('og-image.jpg')),
)

await Promise.all(jobs)

let total = 0
for (const f of (await readdir(join(root, 'public', 'assets'))).sort()) {
  const { size } = await stat(out(f))
  total += size
  console.log(`${f.padEnd(32)} ${(size / 1024).toFixed(0).padStart(5)} KB`)
}
console.log(`${'total'.padEnd(32)} ${(total / 1024).toFixed(0).padStart(5)} KB`)
