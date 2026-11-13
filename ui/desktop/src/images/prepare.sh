#!/usr/bin/env sh

# Create template icons for the menu bar
convert -background none -resize 22x22 glyph.svg iconTemplate.png
convert -background none -resize 44x44 glyph.svg [REDACTED_EMAIL]

# Create main application icons from icon.svg
convert -background none -resize 1024x1024 icon.svg icon.png
convert -background none -resize 2048x2048 icon.svg [REDACTED_EMAIL]

# Create Windows icon (ico) with multiple sizes
convert icon.svg -background none -define icon:auto-resize=256,128,64,48,32,16 icon.ico

# Create macOS icon set (icns)
mkdir -p icon.iconset
convert -background none -resize 16x16 icon.svg icon.iconset/icon_16x16.png
convert -background none -resize 32x32 icon.svg icon.iconset/[REDACTED_EMAIL]
convert -background none -resize 32x32 icon.svg icon.iconset/icon_32x32.png
convert -background none -resize 64x64 icon.svg icon.iconset/[REDACTED_EMAIL]
convert -background none -resize 128x128 icon.svg icon.iconset/icon_128x128.png
convert -background none -resize 256x256 icon.svg icon.iconset/[REDACTED_EMAIL]
convert -background none -resize 256x256 icon.svg icon.iconset/icon_256x256.png
convert -background none -resize 512x512 icon.svg icon.iconset/[REDACTED_EMAIL]
convert -background none -resize 512x512 icon.svg icon.iconset/icon_512x512.png
convert -background none -resize 1024x1024 icon.svg icon.iconset/[REDACTED_EMAIL]
iconutil -c icns icon.iconset
rm -rf icon.iconset