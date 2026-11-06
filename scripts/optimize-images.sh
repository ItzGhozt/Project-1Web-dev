#!/bin/bash
# Creates web-sized copies of images/collections/** into images/web/collections/**
# Usage: scripts/optimize-images.sh   (skips files already converted)
cd "$(dirname "$0")/.." || exit 1
SRC="images/collections"; DST="images/web/collections"
find "$SRC" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0 | while IFS= read -r -d '' f; do
  out="$DST/${f#$SRC/}"
  [ -f "$out" ] && continue
  mkdir -p "$(dirname "$out")"
  sips -Z 2000 -s format jpeg -s formatOptions 82 "$f" --out "$out" >/dev/null 2>&1 && echo "ok  $out" || echo "FAIL $f"
done
