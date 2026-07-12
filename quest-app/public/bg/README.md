# The Painted World Map

`square.png` (1600×903) is the entire town — one illustration stretched over the
game's 50×28 collision grid (`src/data/world.ts`). The camera shows a 16×12-tile
window and follows the player, so play is a zoomed-in walk through the painting.

Everything in the art (houses, cars, trees, crowds, the train) is scenery made
solid by invisible `#` tiles. The only sprites drawn on top are the player, the
eight locals and the cat.

## Changing the art

Replace `square.png` with any same-composition repaint and nothing else changes.
If the layout moves (streets/buildings shift), retune collision **in the game**:

1. Run the dev server, walk into town, press **G** — the grid overlay becomes
   a collision editor (red = blocked, blue = water).
2. Click or drag to paint blocked tiles; click again to clear; ⇧-click for
   water. You can keep walking with WASD while editing.
3. Hit **Save map** — the grid is written to `src/data/maps/square.json`
   through the dev server. What you painted is now the shipped map.

For bulk re-tracing of a brand-new painting, `scripts/trace-town.py` still
generates a full grid from `carve()`/`block()` rects + a tinted preview image
(update its output to the JSON file).

## Spec

- Name: exactly `{locationId}.png` — currently the one location is `square`.
- Any resolution; it is stretched to the grid (grid cells ≈ 32px of this image).
- Water tiles (`~`) get an animated ripple overlay on top of the painted water.
